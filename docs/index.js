const basicInfo = require("./basicInfo");
const servers = require("./servers");
const components = require("./components");
const paths = require("./paths");

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...paths
};
