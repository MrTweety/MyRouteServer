const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const routesRoutes = require("./routes/routes");
const errorHandler = require("./middleware/errors");

const dbUser = "myRouteUser"; // edit
const dbPass = "myRoutePass"; // edit

//url mongodb.net
const mongoDBUrl = `mongodb+srv://${dbUser}:${dbPass}@myroute-hytqd.mongodb.net/test2?retryWrites=true&w=majority`;

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

app.use("/routes", routesRoutes);

app.use(errorHandler.notFound);
app.use(errorHandler.cacheErrors);

module.exports = app;
