const express = require("express");
const util = require("./util");
const path = require("path");
const fs = require("fs");

// 当前执行目录
const server_work = process.cwd();

const app = express();

app.get("/now", function (req, res) {
  res.send(new Date().toLocaleString());
});

app.get("/app", function (req, res) {
  res.send(new Date().toLocaleString());
});

function start() {
  app.listen(5003, "0.0.0.0", () => {
    console.log("server starting pkg...");
  });
}

start();
