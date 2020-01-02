const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const routesRoutes = require("./routes/routes");
const usersRoutes = require("./routes/users");
const tokensRoutes = require("./routes/tokens");
const commentRoutes = require("./routes/comment");

const errorHandler = require("./middleware/errors");
const jwtHandler = require("./common/authUtils");

const dbUser = "myRouteUser"; // edit
const dbPass = "myRoutePass"; // edit
const dbName = "test2";
// const dbName = "myRouteDb"; //baza Prod

const mongoDBUrl = `mongodb+srv://${dbUser}:${dbPass}@myroute-hytqd.mongodb.net/${dbName}?retryWrites=true&w=majority`;
//const mongoDBUrl = `mongodb://127.0.0.1:27017/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const app = express();

app.options("/*", function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Content-Length, X-Requested-With,content-type, Content-Type,Authorization, Accept"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Content-Type", "application/json");
  res.header("Allow", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Connection", "keep-alive");
  res.header("Access-Control-Allow-Credentials", "true");

  console.log("options options options");
  return res.sendStatus(200);
  // next();
});

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Content-Length, X-Requested-With,content-type, Content-Type,Authorization, Accept"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Content-Type", "application/json");
  res.header("Allow", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Connection", "keep-alive");
  res.header("Access-Control-Allow-Credentials", "true");

  console.log("options next ");
  next();
});
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(cookieParser());

// app.use(
//   session({
//     secret: "myRoute",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {}
//   })
// );

app.use(jwtHandler.verifyToken);

app.use("/tokens", tokensRoutes);
app.use("/routes", routesRoutes);
app.use("/user", usersRoutes);
app.use("/comment", commentRoutes);

app.use(errorHandler.notFound);
app.use(errorHandler.cacheErrors);

module.exports = app;
