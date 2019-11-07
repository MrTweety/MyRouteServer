const mongoose = require("mongoose");

const coordsSchema = new mongoose.Schema({
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
  }
});

const routesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  coords: [coordsSchema],
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

module.exports = {
  Routes: mongoose.model("Routes", routesSchema),
  Coords: mongoose.model("Coords", coordsSchema)
};
