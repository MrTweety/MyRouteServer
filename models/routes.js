const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date
    // required: true,
    // default: Date.now
  }
});

const coordsSchema = new Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  altitude: {
    type: Number,
    required: false
  },
  heading: {
    type: Number,
    required: false
  },
  timestamp: {
    type: Date,
    required: false
  },
  image: {
    type: String,
    required: false
  }
});

const routesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  coords: [coordsSchema],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  startDate: {
    type: Date,
    required: true
    // default: Date.now
  },
  endDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Routes = mongoose.model("Routes", routesSchema);
const Coords = mongoose.model("Coords", coordsSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  Routes,
  Coords,
  User
};
