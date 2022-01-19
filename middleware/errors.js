exports.notFound = (req, res, next) => {
  //res.status(404).render("404.html");
  const error = new Error("404 page not found");
  error.status = 404;
  next(error);
};

exports.catchAsync = (fn, status = 500) => {
  return (req, res, next) => {
    fn(req, res, next).catch(error => {
      error.status = error.status || status;
      next(error);
    });
  };
};

exports.cacheErrors = (err, req, res, next) => {
  console.log("MG-log ~ file: errors.js ~ line 18 ~ err", err);
  res.status(err.status || 500).json({ message: err.message });
};
