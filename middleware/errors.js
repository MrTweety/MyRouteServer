exports.notFound = (req, res, next) => {
  //res.status(404).render("404.html");
  const error = new Error("404 page not found");
  error.status = 404;
  error.render = "404.html";
  next(error);
};

exports.catchAsync = (fn, status = 400, jsonRes = true) => {
  return (req, res, next) => {
    fn(req, res, next).catch(error => {
      error.status = status;
      error.json = jsonRes;
      next(error);
    });
  };
};

exports.cacheErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  if (err.json) {
    res.json({ message: err.message });
  } else {
    res.render(err.render || "error.html", { message: err.message });
  }
};
