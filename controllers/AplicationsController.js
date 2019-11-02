exports.store = (req, res) => {
  req.flash("form", req.body.name + " You are a true hero!");
  res.redirect("/");
  //   res.json({
  //     'name': req.body.name,
  //     'nr': req.body.nr,
  //     'mess': req.body.mess
  //   });
};
