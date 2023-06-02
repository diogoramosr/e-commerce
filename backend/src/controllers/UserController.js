import User from "../models/User.js";
import Yup from "yup";

class UserController {
  async index(req, resp) {
    try {
      const users = await User.find();

      if (users.length === 0) {
        return resp
          .status(400)
          .json({ message: "There are no registered users" });
      }

      return resp.send(users);
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async show(req, resp) {
    try {
      const user = req.user;
      return resp.json(user);
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async details(req, resp) {
    try {
      const userId = req.userId;

      const user = await User.findById(userId);

      if (!user) {
        return resp.status(400).json({ error: "User not found" });
      }

      return resp.json({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async store(req, resp) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
      });

      const { name, last_name, date_of_birth, phone_number, email, password } =
        req.body;

      if (!(await schema.isValid(req.body))) {
        return resp.status(400).json({ error: "Validation Failure" });
      }

      if (!name || !last_name || !date_of_birth || !email || !password) {
        resp.status(400).send({ message: "Complete all the fields correctly" });
      }

      const user = await User.findOne({ email });

      if (user) {
        return resp.status(400).json({ message: "E-mail already registered" });
      }

      const createUser = await User.create({
        name,
        last_name,
        date_of_birth,
        phone_number,
        email,
        password,
      });

      return resp.json(createUser);
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }

  async update(req, resp) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
      });

      const { id, user } = req;
      const { name, last_name, date_of_birth, phone_number, email, password } =
        req.body;

      if (!(await schema.isValid(req.body))) {
        return resp.status(400).json({ error: "Validation Failure" });
      }

      if (
        !name &&
        !last_name &&
        !date_of_birth &&
        !phone_number &&
        !email &&
        !password
      ) {
        resp.status(400).send({ message: "Complete all the fields correctly" });
      }

      await User.updateOne({
        id,
        name,
        last_name,
        date_of_birth,
        phone_number,
        email,
        password,
      });

      return resp.json({ message: "User successfully updated!" });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }
}

export default new UserController();
