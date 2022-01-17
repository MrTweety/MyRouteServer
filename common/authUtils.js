const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { isTokenInDataBase } = require("../controllers/tokens/tokenUtils");

const authRoutes = [
  {
    method: "GET",
    path: "/favicon.ico"
  },
  {
    method: "POST",
    path: "/user/login"
  },
  {
    method: "POST",
    path: "/user/createUser"
  },
  {
    method: "OPTIONS",
    path: "/user/login"
  },
  {
    method: "OPTIONS",
    path: "/user/createUser"
  }
];

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const isAuthNotRequired = (httpMethod, url) => {
  console.log(
    "MG-log ~ file: authUtils.js ~ line 31 ~ isAuthNotRequired ~ httpMethod",
    httpMethod
  );
  console.log(
    "MG-log ~ file: authUtils.js ~ line 31 ~ isAuthNotRequired ~ url",
    url
  );
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
  let user;
  try {
    user = await User.findById(userData._id);
  } catch (error) {
    return false;
  }
  if (user === null) {
    return false;
  }

  if (user.name !== userData.name || user.login !== userData.login) {
    return false;
  }
  console.log("MG-log: user", user);
  return user;
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

exports.verifyToken = async (req, res, next) => {
  // console.log("MG-log ~ file: authUtils.js ~ line 77 ~ exports.verifyToken= ~ res", res)
  // console.log("MG-log ~ file: authUtils.js ~ line 77 ~ exports.verifyToken= ~ req", req)
  // console.log("MG-log ~ file: authUtils.js ~ line 77 ~ exports.verifyToken= ~ verifyToken")
  const { originalUrl, method } = req;
  let userData = null;
  let tokenJWT = null;
  let user = null;

  let authIsRequired = isAuthNotRequired(method, originalUrl);

  if (authIsRequired) {
    let authHeader = req.header("Authorization");
    tokenJWT = authHeader !== undefined ? authHeader.split(" ")[1] : false;
    console.log(tokenJWT);

    const isTokenSaved = isTokenInDataBase(tokenJWT);
    if (isTokenSaved) {
      userData = verifyToken(tokenJWT);

      user = await isUserInDatabase(userData);
      console.log("MG-log: exports.verifyToken -> user", user);
      if (!user) {
        console.log("MG-log: exports.verifyToken -> !user");

        return res.status(401).send({
          ok: false,
          error: {
            reason: "Invalid Token",
            message: "Invalid Token",
            errorCode: 401
          }
        });
      }
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
  req.user = user;

  return next();
};
