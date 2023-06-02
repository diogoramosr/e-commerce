import Computers from "../models/Computers.js";
import mongoose from "mongoose";
import User from "../models/User.js";

class ComputersController {
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
        Computers.find().sort({ _id: -1 }).skip(offset).limit(limit);

      const countComputers = () => Computers.countDocuments();

      const computers = await findAll(offset, limit);
      const total = await countComputers();
      const currentUrl = req.baseUrl;

      const next = offset + limit;
      const nextUrl =
        next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

      const previous = offset - limit < 0 ? null : offset - limit;
      const previousUrl =
        previous != null
          ? `${currentUrl}?limit=${limit}$offset=${previous}`
          : null;

      if (computers.length === 0) {
        return resp
          .status(400)
          .json({ message: "There are no registered computers" });
      }

      return resp.send({
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,
        results: computers.map((item) => ({
          _id: item._id,
          thumbnail: item.thumbnail,
          thumbnail_urls: item.thumbnail_urls,
          title: item.title,
          description: item.description,
          price: item.price,
          assessment: item.assessment,
          category: item.category,
          comments: item.comments,
          likes: item.likes,
          manufacturer: item.manufacturer,
          model: item.model,
          color: item.color,
          brand: item.brand,
          line: item.line,
          createdAt: item.createdAt,
        })),
      });
    } catch (error) {
      return resp.status(500).send({ message: error.message });
    }
  }

  async show(req, resp) {
    try {
      const { computers_id } = req.params;
      const computer = await Computers.findById(computers_id);

      if (!mongoose.Types.ObjectId.isValid(computers_id)) {
        return resp.status(400).json({ message: "Invalid id" });
      }

      if (!computer) {
        return resp.status(404).json({ message: "Computer not found" });
      }

      if (computer.length === 0) {
        return resp
          .status(404)
          .json({ message: "There are no registered Computers" });
      }

      return resp.json(computer);
    } catch (error) {}
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

      if (
        !title ||
        !description ||
        !price ||
        !assessment ||
        !category ||
        !manufacturer ||
        !model ||
        !color ||
        !brand ||
        !line
      ) {
        return resp
          .status(400)
          .json({ message: "Complete all the fields correctly" });
      }

      if (!req.files) {
        return resp
          .status(400)
          .json({ message: "You must send at least one image" });
      }

      const computer = await Computers.create({
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

      const computersWithUrls = computer.toObject();
      computersWithUrls.thumbnail_urls = computer.thumbnail_urls;

      computer.thumbnail_urls = computer.thumbnail_urls;

      return resp.json(computersWithUrls);
    } catch (error) {
      return resp.status(500).json({ message: error.message });
    }
  }

  async update(req, resp) {
    try {
      const filenames = req.files.map((file) => file.filename);
      const { computers_id } = req.params;
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

      if (!mongoose.Types.ObjectId.isValid(computers_id)) {
        return resp.status(400).json({ message: "Invalid id" });
      }

      if (
        !title ||
        !description ||
        !price ||
        !assessment ||
        !category ||
        !manufacturer ||
        !model ||
        !color ||
        !brand ||
        !line
      ) {
        return resp
          .status(400)
          .json({ message: "Complete all the fields correctly" });
      }

      if (!req.files) {
        return resp
          .status(400)
          .json({ message: "You must send at least one image" });
      }

      const computer = await Computers.findById(computers_id);

      if (!computer) {
        return resp.status(404).json({ message: "Computer not found" });
      }

      if (String(computer.user) !== String(req.userId)) {
        return resp
          .status(401)
          .json({ message: "You are not authorized to update this computer" });
      }

      await Computers.updateOne(
        { _id: computers_id },
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

      return resp.json({ message: "Computer updated successfully" });
    } catch (error) {
      return resp.status(500).json({ message: error.message });
    }
  }

  async destroy(req, resp) {
    try {
      const { computers_id } = req.params;

      const computers = await Computers.findById(computers_id);

      if (!mongoose.Types.ObjectId.isValid(computers_id)) {
        return resp.status(400).json({ message: "Invalid id" });
      }

      if (String(computers.user) !== String(req.userId)) {
        return resp
          .status(401)
          .json({ error: "You didn't delete this Computer" });
      }

      await Computers.deleteOne({ _id: computers_id });

      return resp.json({ message: "Computer deleted successfully" });
    } catch (error) {
      return resp.status(500).json({ message: error.message });
    }
  }

  async like(req, resp) {
    try {
      const { like_id } = req.params;
      const userId = req.userId;

      const likeComputer = (idComputer, userId) =>
        Computers.findOneAndUpdate(
          { _id: idComputer, "likes.userId": { $nin: [userId] } },
          { $push: { likes: { userId, createdAt: new Date() } } }
        );

      const deleteLike = (idComputer, userId) =>
        Computers.findOneAndUpdate(
          { _id: idComputer },
          { $pull: { likes: { userId } } }
        );

      const computersLike = await likeComputer(like_id, userId);

      if (!computersLike) {
        await deleteLike(like_id, userId);
        return resp.json({ message: "Like deleted successfully" });
      }

      resp.send({ message: "Like done successfully" });
    } catch (error) {
      return resp.status(500).json({ message: error.message });
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

      const addComment = async (idComputer, userId, comment) => {
        const idComment = Math.floor(Date.now() * Math.random().toString(36));
        const user = await User.findById(userId);

        if (!user) {
          return resp.status(400).json({ error: "User not found" });
        }

        return Computers.findOneAndUpdate(
          { _id: idComputer },
          {
            $push: {
              comments: {
                idComment,
                username: user.name,
                userId,
                comment,
                createdAt: new Date(),
              },
            },
          }
        );
      };

      await addComment(comment_id, comment, userId);

      return resp.send({ message: "Comment added successfully" });
    } catch (error) {
      return resp.status(500).json({ message: error.message });
    }
  }

  async deleteComment(req, resp) {
    try {
      const { idComputers, idComment } = req.params;
      const userId = req.userId;

      const deleteComment = (idComputers, idComment, userId) =>
        Computers.findOneAndUpdate(
          { _id: idComputers },
          { $pull: { comments: { idComment, userId } } }
        );

      const commentDelete = await deleteComment(idComputers, idComment, userId);

      const commentFinder = commentDelete.comments.find(
        (comment) => comment.idComment === idComment
      );

      if (!commentFinder) {
        return resp.status(404).json({ message: "Comment not found" });
      }

      if (commentFinder.userId !== userId) {
        return resp
          .status(401)
          .json({ message: "You can´t delete this comment" });
      }

      return resp.send({ message: "Comment deleted successfully" });
    } catch (error) {
      return resp.status(500).json({ message: error.message });
    }
  }
}

export default new ComputersController();
