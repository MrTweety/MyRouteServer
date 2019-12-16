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
  console.log("MG-log: userData", userData);
  let user;
  try {
    user = await User.findById(userData._id);
    console.log("MG-log: user", user);
  } catch (error) {
    return false;
  }
  if (user === null) {
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
  console.log(
    "function getUserIdFromToken is deprecated. Use req.jwtUser._id if you can"
  );
  return userData._id;
};

exports.generateJWTToken = payload => {
  return jwt.sign(payload, SECRET_KEY);
};

exports.verifyToken = (req, res, next) => {
  const { originalUrl, method } = req;
  let userData;
  let tokenJWT;
  if (isAuthNotRequired(method, originalUrl)) {
    let authHeader = req.header("Authorization");
    tokenJWT = authHeader !== undefined ? authHeader.split(" ")[1] : false;
    console.log(tokenJWT);

    const isTokenSaved = isTokenInDataBase(tokenJWT);
    if (isTokenSaved) {
      userData = verifyToken(tokenJWT);

      isUserInDatabase(userData).then(value => {
        if (!value) {
          return res.status(401).send({
            ok: false,
            error: {
              reason: "Invalid Token",
              message: "Invalid Token",
              errorCode: 401
            }
          });
        }
      });
    } else {
      return res.status(401).send({
        ok: false,
        error: {
          reason: "Missing Token",
          message: "Missing Token",
          errorCode: 401
        }
      });
    }
  }
  req.jwtToken = tokenJWT;
  req.jwtUser = userData;
  next();
};
