const express = require("express");
const router = express.Router();
const Sub = require("../models/sub");
const errorHandler = require("../middleware/errors")

const getSub = async (req, res, next) => {
  try {
    sub = await Sub.findById(req.params.id);
    if (sub == null) {
      // return res.status(404).json({ message: "Cannot find subscriber" });
      const error = new Error("Cannot find subscriber");
      error.status = 400;
      error.json = true;
      return next(error);
    }
  } catch (error) {
    // return res.status(500).json({ message: error.message });
    error.status = 500;
    error.json = true;
    return next(error);
  }

  res.sub = sub;
  next();
};

//Get all
router.get("/", async (req, res) => {
  try {
    const subs = await Sub.find();
    res.json(subs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get One
router.get("/:id", getSub, (req, res) => {
  res.send(res.sub);
});

//Create One
router.post("/", errorHandler.catchAsync(async (req, res, next) => {
  const sub = new Sub({
    name: req.body.name_,
    subToChanel: req.body.subToChanel
  });
  
    const newSub = await sub.save();
    res.status(201).json(newSub);

}));

// Update One (method put/patch?)
router.put("/:id", getSub, async (req, res) => {
  if (req.body.name != null) {
    res.sub.name = req.body.name;
  }
  if (req.body.subToChanel != null) {
    res.sub.subToChanel = req.body.subToChanel;
  }

  try {
    const updateSub = await res.sub.save();
    res.json(updateSub);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Delete One
router.delete("/:id", getSub, async (req, res) => {
  try {
    await res.sub.remove();
    res.json({ message: "Deleted Subscriber" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
