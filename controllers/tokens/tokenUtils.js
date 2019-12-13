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
    const findToken = await Tokens.find({ token: token });
    if (findToken.length > 0) {
      await findToken[0].remove();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("[deleteToken]: error - ", error);
    return false;
  }
};

const isTokenInDataBase = async token => {
  try {
    return (await Tokens.find({ token: token }).length) > 0;
  } catch (error) {
    console.log("[isTokenInDataBase]: error - ", error);
    return false;
  }
};

module.exports.saveToken = saveToken;
module.exports.deleteToken = deleteToken;
module.exports.isTokenInDataBase = isTokenInDataBase;
