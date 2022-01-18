const Success = {
  "200": { $ref: "#/components/responses/Success" }
};
const BadRequest = {
  "400": { $ref: "#/components/responses/BadRequest" }
};
const Unauthorized = {
  "401": { $ref: "#/components/responses/Unauthorized" }
};
const InternalError = {
  "500": { $ref: "#/components/responses/InternalError" }
};

const defaultResponses = {
  ...Success,
  ...Unauthorized,
  ...InternalError
};

module.exports = {
  responses: defaultResponses,
  Success,
  BadRequest,
  Unauthorized,
  InternalError
};
