const http = require("http");

// create Server
http
  .createServer((req, res) => {
    res.write("Hello You");
    res.end;
  })
  .listen(5000, () => console.log("Server is running..."));
