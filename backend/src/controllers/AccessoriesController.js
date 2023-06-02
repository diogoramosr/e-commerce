import Accessories from "../models/Accessories.js";
import mongoose from "mongoose";
import User from "../models/User.js";

class AccessoriesController {
  async index(req, resp) {
    try {
      let { limit, offset } = req.query;
      limit = Number(limit);
      offset = Number(offset);

      if (!limit) {
        limit = 6;
      }

      if (!offset) {
        offset = 0;
      }

      const findAll = (offset, limit) =>
        Accessories.find().sort({ _id: -1 }).skip(offset).limit(limit);

      const countNews = () => Accessories.countDocuments();

      const accessories = await findAll(offset, limit);
      const total = await countNews();
      const currentUrl = req.baseUrl;

      const next = offset + limit;
      const nextUrl =
        next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

      const previous = offset - limit < 0 ? null : offset - limit;
      const previousUrl =
        previous != null
          ? `${currentUrl}?limit=${limit}$offset=${previous}`
          : null;

      if (accessories.length === 0) {
        return resp
          .status(400)
          .json({ message: "There are no registered accessory" });
      }

      return resp.send({
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,
        results: accessories.map((accessory) => {
          return {
            _id: accessory._id,
            thumbnail: accessory.thumbnail,
            thumbnail_urls: accessory.thumbnail_urls,
            title: accessory.title,
            description: accessory.description,
            price: accessory.price,
            assessment: accessory.assessment,
            category: accessory.category,
            comments: accessory.comments,
            likes: accessory.likes,
            manufacturer: accessory.manufacturer,
            model: accessory.model,
            color: accessory.color,
            brand: accessory.brand,
            line: accessory.line,
            createdAt: accessory.createdAt,
          };
        }),
      });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async show(req, resp) {
    try {
      const { accessories_id } = req.params;
      const accessory = await Accessories.findById(accessories_id);

      if (!mongoose.Types.ObjectId.isValid(accessories_id)) {
        return resp.status(400).json({ message: "Invalid id" });
      }

      if (!accessory) {
        return resp.status(404).json({ message: "Accessory not found" });
      }

      if (accessory.length === 0) {
        return resp
          .status(404)
          .json({ message: "There are no registered accessory" });
      }

      return resp.json(accessory);
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async store(req, resp) {
    try {
      const filenames = req.files.map((file) => file.filename);
      const {
        title,
        description,
        price,
        assessment,
        category,
        manufacturer,
        model,
        color,
        brand,
        line,
      } = req.body;

      if (!title || !description || !price || !assessment || !category) {
        return resp
          .status(400)
          .send({ message: "Complete all the fields correctly" });
      }

      if (!req.files) {
        return resp.status(400).send({ message: "Please, select a thumbnail" });
      }

      const accessory = await Accessories.create({
        thumbnail: filenames,
        title,
        description,
        price,
        assessment,
        category,
        manufacturer,
        model,
        color,
        brand,
        line,
        user: req.userId,
      });

      const accessoriesWitheUrls = accessory.toObject();
      accessoriesWitheUrls.thumbnail_urls = accessory.thumbnail_urls;

      accessory.thumbnail_urls = accessory.thumbnail_urls;

      return resp.json(accessoriesWitheUrls);
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async update(req, resp) {
    try {
      const filenames = req.files.map((file) => file.filename);
      const { accessories_id } = req.params;
      const {
        title,
        description,
        price,
        assessment,
        category,
        manufacturer,
        model,
        color,
        brand,
        line,
      } = req.body;

      if (!mongoose.Types.ObjectId.isValid(accessories_id)) {
        return resp.status(400).json({ message: "Invalid id" });
      }

      if (!title || !description || !price || !assessment || !category) {
        return resp
          .status(400)
          .send({ message: "Complete all the fields correctly" });
      }

      if (!req.files) {
        return resp
          .status(400)
          .json({ message: "You must send at least one image" });
      }

      const accessory = await Accessories.findById(accessories_id);

      if (!accessory) {
        return resp.status(404).json({ message: "Accessory not found" });
      }

      if (String(accessory.user) !== req.userId) {
        return resp
          .status(401)
          .json({ error: "You are not authorized to update this accessory" });
      }

      await Accessories.updateOne(
        { _id: accessories_id },
        {
          thumbnail: filenames,
          title,
          description,
          price,
          assessment,
          category,
          manufacturer,
          model,
          color,
          brand,
          line,
        },
        { rawResult: true }
      );
      return resp.json({ message: "Accessory updated successfully" });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async destroy(req, resp) {
    try {
      const { accessories_id } = req.params;

      const accessory = await Accessories.findById(accessories_id);

      if (!mongoose.Types.ObjectId.isValid(accessories_id)) {
        return resp.status(400).json({ message: "Invalid id" });
      }

      if (String(accessory.user) !== req.userId) {
        return resp
          .status(401)
          .json({ error: "You didn't delete this Accessory" });
      }

      await Accessories.findByIdAndDelete({ _id: accessories_id });

      return resp.json({ message: "Accessory deleted successfully" });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async like(req, resp) {
    try {
      const { like_id } = req.params;
      const userId = req.userId;

      const likeAccessory = (idAccessory, userId) =>
        Accessories.findOneAndUpdate(
          { _id: idAccessory, "likes.userId": { $nin: [userId] } },
          { $push: { likes: { userId, created: new Date() } } }
        );

      const deleteLike = (idAccessory, userId) =>
        Accessories.findOneAndUpdate(
          { _id: idAccessory },
          { $pull: { likes: { userId } } }
        );

      const accessoryLike = await likeAccessory(like_id, userId);

      if (!accessoryLike) {
        await deleteLike(like_id, userId);
        return resp.status(200).send({ message: "Like successfully removed" });
      }

      resp.send({ message: "Like done successfully" });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async addComment(req, resp) {
    try {
      const { comment_id } = req.params;
      const userId = req.userId;
      const { comment } = req.body;

      if (!comment) {
        return resp.status(400).send({ message: "Write a message to comment" });
      }

      const addComment = async (idAccessory, comment, userId) => {
        const idComment = Math.floor(Date.now() * Math.random()).toString(36);
        const user = await User.findById(userId);

        if (!user) {
          return resp.status(404).send({ message: "User not found" });
        }

        return Accessories.findOneAndUpdate(
          { _id: idAccessory },
          {
            $push: {
              comments: {
                idComment,
                username: user.name,
                comment,
                userId,
                comment,
                createdAt: new Date(),
              },
            },
          }
        );
      };

      await addComment(comment_id, comment, userId);
      resp.send({ message: "Comment successfully completed" });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async deleteComment(req, resp) {
    try {
      const { idAccessory, idComment } = req.params;
      const userId = req.userId;

      const deleteComment = (idAccessory, idComment, userId) =>
        Accessories.findOneAndUpdate(
          {
            _id: idAccessory,
          },
          {
            $pull: {
              comments: {
                idComment,
                userId,
              },
            },
          }
        );

      const commentDelete = await deleteComment(idAccessory, idComment, userId);

      const commentFinder = commentDelete.comments.find(
        (comment) => comment.idComment === idComment
      );

      if (!commentFinder) {
        return resp.status(404).send({ message: "Comment not found" });
      }

      if (commentFinder.userId !== userId) {
        return resp
          .status(401)
          .send({ message: "You can´t delete this comment" });
      }

      resp.send({ message: "Comment successfully deleted" });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }
}

export default new AccessoriesController();
