const { Tokens } = require("../../models/tokens");

const saveToken = async token => {
  const newToken = new Tokens({
    token: token
  });

  try {
    await newToken.save();
    return true;
  } catch (error) {
    console.log("[saveToken]: error - ", error);
    return false;
  }
};

const deleteToken = async token => {
  try {
    await Tokens.findOneAndDelete({ token: token });
    return true;
  } catch (error) {
    console.log("[deleteToken]: error - ", error);
    return false;
  }
};

const isTokenInDataBase = token => {
  try {
    return Tokens.find({ token: token }).length === 1;
  } catch (error) {
    console.log("[isTokenInDataBase]: error - ", error);
    return false;
  }
};

module.exports.saveToken = saveToken;
module.exports.deleteToken = deleteToken;
module.exports.isTokenInDataBase = isTokenInDataBase;
