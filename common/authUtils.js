const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { isTokenInDataBase } = require("../controllers/tokens/tokenUtils");

const authRoutes = [
  {
    method: "POST",
    path: "/user/login"
  },
  {
    method: "POST",
    path: "/user/createUser"
  }
];

const SECRET_KEY = "JWT_SECRET";

const isAuthNotRequired = (httpMethod, url) => {
  for (let routeObj of authRoutes) {
    if (routeObj.method === httpMethod && routeObj.path === url) {
      return false;
    }
  }
  return true;
};

const verifyToken = jwtToken => {
  try {
    return jwt.verify(jwtToken, SECRET_KEY);
  } catch (e) {
    console.log("e:", e);
    return null;
  }
};

const isUserInDatabase = async userData => {
  try {
    user = await User.findById(userData.id);
  } catch (error) {
    return false;
  }

  if (user.name !== userData.name || user.login !== userData.login) {
    return false;
  }

  return user.length !== 0;
};

exports.getUserIdFromToken = req => {
  let authHeader = req.header("Authorization");
  let tokenJWT = authHeader !== undefined ? authHeader.split(" ")[1] : false;
  const userData = verifyToken(tokenJWT);
  return userData.id;
};

exports.generateJWTToken = payload => {
  return jwt.sign(payload, SECRET_KEY);
};

exports.verifyToken = (req, res, next) => {
  const { originalUrl, method } = req;

  if (isAuthNotRequired(method, originalUrl)) {
    let authHeader = req.header("Authorization");
    let tokenJWT = authHeader !== undefined ? authHeader.split(" ")[1] : false;

    const isTokenSaved = isTokenInDataBase(tokenJWT);
    if (isTokenSaved) {
      const userData = verifyToken(tokenJWT);

      isUserInDatabase(userData).then(value => {
        if (!value) {
          return res.status(401).send({
            ok: false,
            error: {
              reason: "Invalid Token",
              code: 401
            }
          });
        }
      });
    } else {
      return res.status(401).send({
        ok: false,
        error: {
          reason: "Missing Token",
          code: 401
        }
      });
    }
  }
  next();
};
