const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use("/static", express.static(path.join(__dirname, "client/build")));

app.get("/server/", (req, res) => {});

app.get("*", (req, res) =>
  res.sendfile(__dirname + "/client/build/index.html")
);

const port = process.env.PORT || 5000;

server.listen(port);
