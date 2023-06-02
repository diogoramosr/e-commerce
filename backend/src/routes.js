import { Router } from "express";
import multer from "multer";

const routes = new Router();

import uploadConfig from "./config/upload.js";
const upload = multer(uploadConfig);

// CONTROLLERS
import UserController from "./controllers/UserController.js";
import AuthController from "./controllers/AuthController.js";
import GamesController from "./controllers/GamesController.js";
import NoveltiesController from "./controllers/NoveltiesController.js";
import ComputersController from "./controllers/ComputersController.js";
import AccessoriesController from "./controllers/AccessoriesController.js";
import SearchController from "./controllers/SearchController.js";
import CarrouselCartController from "./controllers/CarrouselCartController.js";

// MIDDLEWARES
import { validId, validUser } from "./middlewares/globalMiddlewares.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

// USER
routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.get("/users/:user_id", validId, validUser, UserController.show);
routes.get("/user", authMiddleware, UserController.details);
routes.patch("/users/:user_id", validId, validUser, UserController.update);

// GAMES
routes.post(
  "/games",
  authMiddleware,
  upload.array("thumbnail"),
  GamesController.store
);
routes.get("/games", GamesController.index);
routes.get("/games/:game_id", GamesController.show);
routes.patch(
  "/games/:game_id",
  authMiddleware,
  upload.array("thumbnail"),
  GamesController.update
);
routes.delete("/games/:game_id", authMiddleware, GamesController.destroy);
routes.patch("/games/like/:like_id", authMiddleware, GamesController.like);
routes.patch(
  "/games/comment/:comment_id",
  authMiddleware,
  GamesController.addComment
);
routes.patch(
  "/games/comment/:idGames/:idComment",
  authMiddleware,
  GamesController.deleteComment
);

// COMPUTERS
routes.post(
  "/computers",
  authMiddleware,
  upload.array("thumbnail"),
  ComputersController.store
);
routes.get("/computers", ComputersController.index);
routes.get("/computers/:computers_id", ComputersController.show);
routes.patch(
  "/computers/:computers_id",
  authMiddleware,
  upload.array("thumbnail"),
  ComputersController.update
);
routes.delete(
  "/computers/:computers_id",
  authMiddleware,
  ComputersController.destroy
);
routes.patch(
  "/computers/like/:like_id",
  authMiddleware,
  ComputersController.like
);
routes.patch(
  "/computers/comment/:comment_id",
  authMiddleware,
  ComputersController.addComment
);
routes.patch(
  "/computers/comment/:idComputers/:idComment",
  authMiddleware,
  ComputersController.deleteComment
);

// ACCESSORIES
routes.post(
  "/accessories",
  authMiddleware,
  upload.array("thumbnail"),
  AccessoriesController.store
);
routes.get("/accessories", AccessoriesController.index);
routes.get("/accessories/:accessories_id", AccessoriesController.show);
routes.patch(
  "/accessories/:accessories_id",
  authMiddleware,
  upload.array("thumbnail"),
  AccessoriesController.update
);
routes.delete(
  "/accessories/:accessories_id",
  authMiddleware,
  AccessoriesController.destroy
);
routes.patch(
  "/accessories/like/:like_id",
  authMiddleware,
  AccessoriesController.like
);
routes.patch(
  "/accessories/comment/:comment_id",
  authMiddleware,
  AccessoriesController.addComment
);
routes.patch(
  "/accessories/comment/:idAccessories/:idComment",
  authMiddleware,
  AccessoriesController.deleteComment
);

// -------------------------------------

// SEARCH
routes.get("/search", SearchController.index);

// LOGIN - AUTH
routes.post("/login", AuthController.login);

// ITEMS DE CART - CARROUSEL
routes.get("/carrouselCart", CarrouselCartController.index);

// NOVELTIES
routes.get("/novelties", NoveltiesController.index);

export default routes;
