const { createServer } = require("http");
const { parse } = require("path");

const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathName;

  if (pathName === "/") {
    res.end("hello world!");
  } else if (pathName === "/test") {
    res.end("Test");
  } else {
    res.end("url not found");
  }
});

server.listen(8000, () => console.log("listening for requests on port 8000"));
