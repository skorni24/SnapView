const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const mongoose = require("mongoose");
// const username = encodeURIComponent("srinivas");
// const password = encodeURIComponent("srinu1973");
const placesRoutes = require("./Routes/places-routes");
const userRoutes = require("./Routes/users-routes");
const cors = require("cors");

const app = express();
app.use(bodyParser.json()); // => middleware which parses incoming requests with JSON payloads and displays them in the console

app.use("/uploads/images", express.static("uploads/images")); // => /uploads/images => http://localhost:5000/uploads/images

app.use(cors()); //cors- cross origin resource sharing
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   next();
// });

app.use("/api/places", placesRoutes); // => /api/places...
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Could not find this route.", 404);
  throw error;
});
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "mongodb+srv://srinivas:srinu1973@cluster0.zlp7yi4.mongodb.net/mern?retryWrites=true&w=majority&appName=cluster0"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
