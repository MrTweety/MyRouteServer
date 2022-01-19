exports.limits = (req, res, next) => {
  try {
    req.query.offset = parseInt(req.query.offset, 10) || 0;
    req.query.limit = parseInt(req.query.limit, 10) || 0;
  } catch (error) {
    next(error);
  }
  next();
};
exports.onlyDevAccess = (req, res, next) => {
  if (process.env.APP_ENV !== "__development__") {
    const error = new Error("Only Dev Access");
    error.status = 401;
    next(error);
  }
  next();
};
