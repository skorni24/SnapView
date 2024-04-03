const express = require("express");
const { check } = require("express-validator"); //using {} because we are importing a single function called array destructoring
const checkAuth = require("../middleware/check-auth");
const router = express.Router();
const placesControllers = require("../controllers/palces-controllers");
const fileUpload = require("../middleware/file-upload");
router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlacesByUserId);

router.use(checkAuth);

router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesControllers.createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesControllers.updatePlace
);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
