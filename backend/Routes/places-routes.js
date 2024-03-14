const express = require("express");
const HttpError = require("../models/http-error");
const router = express.Router();
const placesControllers = require("../controllers/palces-controllers");

router.get("/:pid",placesControllers.getPlaceById); 

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.post("/", placesControllers.createPlace);



module.exports = router;
