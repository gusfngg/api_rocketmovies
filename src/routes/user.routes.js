const { Router } = require("express");
const userRoutes = Router();

const UserController = require("../controllers/UserController")
const userControler = new UserController();

userRoutes.post("/", userControler.create)
userRoutes.put("/:id", userControler.update)

module.exports = userRoutes;  