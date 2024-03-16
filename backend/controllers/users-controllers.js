const { v4: uuidv4 } = require("uuid");

const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const DUMMY_PLACES = [
  {
    id: "u1",
    name: "Srinivas",
    email: "asda@gmail.com",
    password: "1234",
  },
];
const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_PLACES });
};
const signup = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // res.status(422);
    console.log(errors);
    throw new HttpError("Invalid inputs passed, please check your data.", 422); // => 422 => invalid input
  }
  const hasUser = DUMMY_PLACES.find((u) => u.email === email);
  if (hasUser) {
    throw new HttpError("Could not create user, email already exists.", 422); //422=>Unprocessable Entity(invalid user)
  }

  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_PLACES.push(createdUser);
  res.status(201).json({ user: createdUser });
};
const login = (req, res, next) => {
  const { email, password } = req.body;
  const identifiedUser = DUMMY_PLACES.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError(
      "Could not identify user, credentials seem to be wrong."
    );
  }
  res.json({ message: "Logged in!" });
};
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
