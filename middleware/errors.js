exports.notFound = (req, res, next) => {
  //res.status(404).render("404.html");
  const error = new Error("404 page not found");
  error.status = 404;
  next(error);
};

exports.catchAsync = (fn, status = 400) => {
  return (req, res, next) => {
    fn(req, res, next).catch(error => {
      error.status = status;
      next(error);
    });
  };
};

exports.cacheErrors = (err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
};
