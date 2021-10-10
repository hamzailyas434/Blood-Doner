const express = require("express");

// Imort COntroller
const donerController = require("./../controllers/donerController");
const router = express.Router();
router
  .route("/")
  .get(donerController.getAllDoners)
  .post(donerController.createDoner);
router
  .route("/:id")
  .get(donerController.getDoner)
  .patch(donerController.updateDoner)
  .delete(donerController.deleteDoner);

module.exports = router;
