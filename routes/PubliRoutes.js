const router = require("express").Router();

const PubliController = require("../controller/PubliController");
const imageUpload = require("../helpers/imageUpload");

router.get("/", PubliController.read);

router.post("/post",  PubliController.create);

router.put("/:id", PubliController.update);

router.get("/:id", PubliController.readById);

router.delete("/:id", PubliController.del);

router.get("/:id", PubliController.readMyPost);

router.get("/:id", PubliController.readComment);


module.exports = router;
