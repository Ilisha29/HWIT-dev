module.exports = app => {
  //함수로 만들어 객체 app을 전달받음
  const express = require("express");
  const fs = require("fs");
  const router = express.Router();
  const expressSession = require("express-session");

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

    if (req.session.user) {
      fs.readFile("./frontend/plan.html", (err, data) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.end(data);
      });
    } else {
      res.redirect("/");
    }
  });
    
  //계획하기
    router.get("/makeSchedule", (req, res) => {
      console.log("post(/makeSchedule)요청 실행");

      fs.readFile("./frontend/polylineEX.html", (err, data) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.end(data);
      });
    });


  return router;
};