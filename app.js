const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const routesRoutes = require("./routes/routes");
const usersRoutes = require("./routes/users");
const tokensRoutes = require("./routes/tokens");
const commentRoutes = require("./routes/comment");
const swaggerRoutes = require("./routes/swagger");
const infoRoutes = require("./routes/info");

const errorHandler = require("./middleware/errors");
const jwtHandler = require("./common/authUtils");

const {
  MONGO_DB_HOST: dbHost,
  MONGO_DB_NAME: dbName,
  MONGO_DB_USER: dbUser,
  MONGO_DB_PASS: dbPass
} = process.env;

const mongoDBUrl = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
//const mongoDBUrl = `mongodb://127.0.0.1:27017/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const app = express();
app.get("/", (req, res) => {
  return res.redirect(301, "/api-docs");
});
app.use("/api-docs", swaggerRoutes);
app.use("/info", infoRoutes);

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

app.use("/favicon.ico", express.static("public/images/favicon.ico"));

app.use(errorHandler.notFound);
app.use(errorHandler.cacheErrors);

module.exports = app;
