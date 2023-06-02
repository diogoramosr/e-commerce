import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

dotenv.config();

export const authMiddleware = (req, resp, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return resp.status(401);
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return resp.status(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return resp.status(401);
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return resp.status(401).send({ message: "Token invalid!" });
      }

      const user = await User.findById(decoded.id);

      if (!user || !user.id) {
        return resp.status(401).send({ message: "Invalid token!" });
      }

      req.userId = user.id;

      return next();
    });
  } catch (error) {
    resp.status(500).send(error.message);
  }
};
