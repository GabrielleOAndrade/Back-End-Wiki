const router = require("express").Router();

const CommentsController = require("../controller/CommentsController");
const { authMiddleware } = require("../helpers/authMiddleware");

router.post("/post", authMiddleware, CommentsController.create);

router.get("/", authMiddleware, CommentsController.read);

router.get("/:id", authMiddleware, CommentsController.readById);

router.delete("/del/:id", authMiddleware, CommentsController.del);

module.exports = router;