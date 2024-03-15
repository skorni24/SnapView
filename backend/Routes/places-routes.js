const express = require("express");
const HttpError = require("../models/http-error");
const router = express.Router();
const placesControllers = require("../controllers/palces-controllers");

router.get("/:pid",placesControllers.getPlaceById); 

router.get("/user/:uid", placesControllers.getPlacesByUserId);

router.post("/", placesControllers.createPlace);

router.patch("/:pid", placesControllers.updatePlace);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
