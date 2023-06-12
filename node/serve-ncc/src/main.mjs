import express from "express";
import util from "./util/index.mjs";

// 当前执行目录
const server_work = process.cwd();

const app = express();

app.get("/work_path", function (req, res) {
  res.send(server_work);
});

app.get("/now", function (req, res) {
  res.send(util.now());
});

app.get("/", function (req, res) {
  res.send("ncc");
});

function start() {
  app.listen(5003, "0.0.0.0", () => {
    console.log("server starting...");
  });
}

start();
