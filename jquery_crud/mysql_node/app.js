const express = require("express");
const mysql = require("mysql");
const router = require("./router/api/user.js");
const bodyParser = require("body-parser");

//实例化app对象
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//连接mysql
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jj89757123!",
  database: "my_database"
});

//跨域请求;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api/user", router);

//创建数据库请求
app.get("/createdb", (req, res) => {
  let sql = "create database nodemysql";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("database created");
  });
});

//创建表
app.get("/createtable", (req, res) => {
  let sql =
    "create table node(id int auto_increment not null primary key, title varchar(255), body varchar(255))";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("table is created.....");
  });
});

//插入语句
app.get("/addpost", (req, res) => {
  let post = { title: "post one", body: "this is post one" };
  let sql = "insert into node set ?";
  connection.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("data is created.....");
  });
});

//查询语句
app.get("/getpost", (req, res) => {
  let sql = "select * from node";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//查询单条语句
app.get("/getpost/:id", (req, res) => {
  let sql = `select * from node where id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//跟新·内容
app.get("/updatepost/:id", (req, res) => {
  let updatePost = "this is updated post";
  let sql = `update node set  body = '${updatePost}' where id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("更新成功");
  });
});

//删除
app.get("/deletepost/:id", (req, res) => {
  let sql = `delete from node where id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("删除成功");
  });
});

connection.connect(err => {
  if (err) throw err;
  console.log("mysql is connected.....");
});

app.listen("59999", () => {
  console.log("server on port: localhost:59999");
});
