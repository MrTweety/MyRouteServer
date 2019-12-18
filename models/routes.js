const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  coords: [coordsSchema],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  routeAuthor: { type: Schema.Types.ObjectId, ref: "User", required: true },
  startDate: {
    type: Date,
    required: true
    // default: Date.now
  },
  endDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  distance: {
    type: Number,
    required: false
  },
  timerDuration: {
    type: Number,
    required: false
  }
});

const Routes = mongoose.model("Routes", routesSchema);
const Coords = mongoose.model("Coords", coordsSchema);

module.exports = {
  Routes,
  Coords
};
