const router = require("express").Router();
const controller = require("../../controller/burgerController");

router
  .route("/")
  .get(controller.findAll)
  .post(controller.create);

router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;