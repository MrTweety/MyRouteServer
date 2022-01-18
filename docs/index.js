const basicInfo = require("./basicInfo");
const servers = require("./servers");
const components = require("./components");
const users = require("./users");
// const todos = require('./todos');

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...users
  // ...todos
};
