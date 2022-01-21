module.exports = {
  servers:
    process.env.APP_ENV === "__development__"
      ? [
          {
            url: "http://localhost:8080",
            description: "Local server"
          },
          {
            url: "https://my-route-server.herokuapp.com",
            description: "Stage server"
          }
        ]
      : [
          {
            url: "https://my-route-server.herokuapp.com",
            description: "Stage server"
          },
          {
            url: "http://localhost:8080",
            description: "Local server"
          }
        ]
};
