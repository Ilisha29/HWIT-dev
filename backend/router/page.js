module.exports = app => {
  //함수로 만들어 객체 app을 전달받음
  var express = require("express");
  var fs = require("fs");
  var router = express.Router();

  router.get("/", (req, res) => {
    console.log("get(/)요청 실행");

    fs.readFile("./frontend/index.html", (err, data) => {
      if (err) throw err;

      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.end(data);
    });
  });

  router.get("/plan", (req, res) => {
    console.log("get(/plan)요청 실행");

    fs.readFile("./frontend/plan.html", (err, data) => {
      if (err) throw err;

      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.end(data);
    });
  });

  return router;
};
