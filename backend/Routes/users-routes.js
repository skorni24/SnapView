const express = require("express");
const { check } = require("express-validator");

const HttpError = require("../models/http-error");
const router = express.Router();
const userControllers = require("../controllers/users-controllers");

router.get("/", userControllers.getUsers); 

router.post("/signup",[
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),//normalizeEmail() is a validator function that normalizes the email like it converts the email to lowercase
    check("password").isLength({min: 6})
], userControllers.signup);

router.post("/login", userControllers.login);

module.exports = router;
