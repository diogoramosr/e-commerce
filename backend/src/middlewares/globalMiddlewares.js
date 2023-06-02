import mongoose from "mongoose";
import User from "../models/User.js";

export const validId = (req, resp, next) => {
  try {
    const { user_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(user_id)) {
      return resp.status(400).json({ error: "Invalid id" });
    }

    next();
  } catch (error) {
    resp.status(500).send({ message: error.message });
  }
};

export const validUser = async (req, resp, next) => {
  try {
    const { user_id } = req.params;

    const user = await User.findById(user_id);

    if (!user) {
      return resp.status(400).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    resp.status(500).send({ message: error.message });
  }
};
