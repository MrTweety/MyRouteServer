const offset = {
  name: "offset",
  in: "query",
  schema: {
    type: "number",
    example: "0"
  }
};
const limit = {
  name: "limit",
  in: "query",
  schema: {
    type: "number",
    example: "2"
  }
};

const limits = [offset, limit];

module.exports = {
  limits
};
