const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const routesSub = require("./routes/sub");
const routesRoutes = require("./routes/routes");


const dbUser = "myRouteUser"; // edit
const dbPass = "myRoutePass"; // edit

//url mongodb.net 
const mongoDBUrl =
  `mongodb+srv://${dbUser}:${dbPass}@myroute-hytqd.mongodb.net/test?retryWrites=true&w=majority`;

//url azure.net
// const mongoDBUrl =
//   `mongodb://${dbUser}:c9Jt15nCpqANlJe00BNr4nyUC7F01HCp2V3BhvUCAWhY9bCvAfwcwtzoI09yZuJa8trw5aiq3Y085ZgBntjczA%3D%3D@myroutedb.documents.azure.com:10255/?ssl=true`;

  mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//ok
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(mongoDBUrl, { useNewUrlParser: true });
// client.connect(err => {
// console.log("MG-log: dupa")
// const collection = client.db("test").collection("devices");
// console.log("MG-log: collection", collection)
//   // perform actions on the collection object
//   client.close();
//   if(err){
//   console.log("MG-log: err", err)
//   }
// });

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

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
app.use(flash());

app.use("/", routes);
app.use("/sub", routesSub);routesRoutes
app.use("/routes", routesRoutes);

app.use((req, res, next) => {
  res.status(404).render("404.html");
});

module.exports = app;
