const router = require("express").Router();

// middlewares goes here
const auth = require("../middleware/auth");

const userController = require("../controllers/userController");

router.get("/users", [auth], userController.getAllUsers);

module.exports = router;
