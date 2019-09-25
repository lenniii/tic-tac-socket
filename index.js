const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static(__dirname + "client/build"));

app.get("/server/", (req, res) => {});

app.get("*", (req, res) =>
  res.sendfile(__dirname + "/client/build/index.html")
);

const port = process.env.PORT || 5000;

server.listen(port);
