const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jj89757123!",
  database: "my_database"
});

//http://localhost:59999/api/user/test
router.get("/test", (req, res) => {
  let sql = "select * from node";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

router.get("/alluser", (req, res) => {
  console.log(req.query.id);
  let sql = "select * from node";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

router.post("/adduser", (req, res) => {
  let data = { name: req.body.name, age: parseInt(req.body.age) };
  let sql = "insert into node set ?";
  connection.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

router.delete("/deleteuser/:id", (req, res) => {
  let sql = `delete from node where id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
