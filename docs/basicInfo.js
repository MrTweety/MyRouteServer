module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "MyRoute",
    description:
      '### MyRoute API \n#### How to run this\n1. POST `/user/login` or `/user/createUser` with the following body `{ "login": "login", "password": "password" }` and take the token. \n\n *You should receive a "200 OK" response with the user details including a JWT token in the response body, make a copy of the token value because we will be using it in the next step to make an authenticated request.* \n 2. Select the "Authorize" and paste the JWT token from the previous authenticate step into the Token "Value" field.',
    contact: {
      name: "MrTweety",
      //   email: "test@test.com",
      url: "https://mrtweety.github.io/"
    }
  }
};
