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

const mongoDBUrl = `mongodb+srv://${dbUser}:${dbPass}@myroute-hytqd.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// const mongoDBUrl = `mongodb://127.0.0.1:27017/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "myRoute",
    resave: false,
    saveUninitialized: true,
    cookie: {}
  })
);

app.use(jwtHandler.verifyToken);

app.use("/tokens", tokensRoutes);
app.use("/routes", routesRoutes);
app.use("/user", usersRoutes);
app.use("/comment", commentRoutes);

app.use(errorHandler.notFound);
app.use(errorHandler.cacheErrors);

module.exports = app;
