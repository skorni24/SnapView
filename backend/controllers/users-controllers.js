const { v4: uuidv4 } = require("uuid");

const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const User = require("../models/user");

const DUMMY_PLACES = [
  {
    id: "u1",
    name: "Srinivas",
    email: "asda@gmail.com",
    password: "1234",
  },
];
const getUsers = async (req, res, next) => {
  // res.json({ users: DUMMY_PLACES });
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const { name, email, password, places } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // res.status(422);
    console.log(errors);
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    ); // => 422 => invalid input
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    console.log(err);
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    image: "https://live.staticflickr.com/7631/26849088292_36fc52ee90_b.jpg",
    password,
    places,
  });

  try {
    await createdUser.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Sign up failed, please try again.", 500);
    return next(error);
  }
  // DUMMY_PLACES.push(createdUser);
  res.status(201).json({ user: createdUser.toObject({ getters: true }) }); //getters remove _id and replace with id
};
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Logging up failed, please try again later.",
      500
    );
    return next(error);
  }
  // res.json({ message: "Logged in!" });

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }
  res.json({ message: "Logged in!" });
};
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
