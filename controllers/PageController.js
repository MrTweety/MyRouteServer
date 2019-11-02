exports.home = (req, res) => {
  // res.sendFile(path.join(__dirname+'/../views/home.html'));
  res.render("home.html", {
    formMessage: req.flash("form")
  });
};
