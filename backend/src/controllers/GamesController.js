import Games from "../models/Games.js";
import mongoose from "mongoose";
import User from "../models/User.js";

class GamesController {
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
        Games.find().sort({ _id: -1 }).skip(offset).limit(limit);

      const countNews = () => Games.countDocuments();

      const games = await findAll(offset, limit);
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

      if (games.length === 0) {
        return resp
          .status(400)
          .json({ message: "There are no registered games" });
      }

      return resp.send({
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,
        results: games.map((item) => ({
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
      resp.status(500).send({ message: error.message });
    }
  }

  async show(req, resp) {
    try {
      const { game_id } = req.params;
      const games = await Games.findById(game_id);

      if (!mongoose.Types.ObjectId.isValid(game_id)) {
        return resp.status(400).json({ error: "Invalid id" });
      }

      if (!games) {
        return resp.status(404).json({ error: "Game not found" });
      }

      if (games.length === 0) {
        return resp
          .status(404)
          .json({ message: "There are no registered games" });
      }

      return resp.json(games);
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
        return resp
          .status(400)
          .json({ message: "You must send at least one image" });
      }

      const games = await Games.create({
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

      const gameWithUrls = games.toObject();
      gameWithUrls.thumbnail_urls = games.thumbnail_urls;

      games.thumbnail_urls = games.thumbnail_urls;

      return resp.json(gameWithUrls);
    } catch (error) {
      return resp.status(500).json({ message: error.message });
    }
  }

  async update(req, resp) {
    try {
      const filenames = req.files.map((file) => file.filename);
      const { game_id } = req.params;
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

      if (!mongoose.Types.ObjectId.isValid(game_id)) {
        return resp.status(400).json({ error: "Invalid id" });
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

      const games = await Games.findById(game_id);

      if (!games) {
        return resp.status(404).json({ error: "Game not found" });
      }

      if (String(games.user._id) !== req.userId) {
        return resp
          .status(401)
          .json({ error: "You are not authorized to update this game" });
      }

      await Games.updateOne(
        { _id: game_id },
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

      return resp.json({ message: "Game successfully updated!" });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async destroy(req, resp) {
    try {
      const { game_id } = req.params;

      const games = await Games.findById(game_id);

      if (!mongoose.Types.ObjectId.isValid(game_id)) {
        return resp.status(400).json({ error: "Invalid id" });
      }

      if (String(games.user._id) !== req.userId) {
        return resp.status(401).json({ error: "You didn't delete this Game" });
      }

      await Games.findByIdAndDelete({ _id: game_id });

      return resp.json({ message: "Game deleted successfully" });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async like(req, resp) {
    try {
      const { like_id } = req.params;
      const userId = req.userId;

      const likeGame = (idGame, userId) =>
        Games.findOneAndUpdate(
          { _id: idGame, "likes.userId": { $nin: [userId] } },
          { $push: { likes: { userId, created: new Date() } } }
        );

      const deleteLike = (idGame, userId) =>
        Games.findOneAndUpdate(
          { _id: idGame },
          { $pull: { likes: { userId } } }
        );

      const gamesLike = await likeGame(like_id, userId);

      if (!gamesLike) {
        await deleteLike(like_id, userId);
        return resp.status(200).send({ message: "Like successfully removed" });
      }

      resp.send({ message: "Like done successfully" });
    } catch (error) {
      resp.status(500).send({ message: err.message });
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

      const addComment = async (idGame, comment, userId) => {
        const idComment = Math.floor(Date.now() * Math.random()).toString(36);
        const user = await User.findById(userId);

        if (!user) {
          return resp.status(400).json({ error: "User not found" });
        }

        return Games.findOneAndUpdate(
          { _id: idGame },
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

      resp.send({
        message: "Comment successfully completed!",
      });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async deleteComment(req, resp) {
    try {
      const { idGames, idComment } = req.params;
      const userId = req.userId;

      const deleteComment = (idGames, idComment, userId) =>
        Games.findOneAndUpdate(
          { _id: idGames },
          { $pull: { comments: { idComment, userId } } }
        );

      const commentDelete = await deleteComment(idGames, idComment, userId);

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

      resp.send({
        message: "Comment successfully removed!",
      });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }
}

export default new GamesController();
