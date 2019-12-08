<?php

    error_reporting(0);     //过滤报错信息，开发时不加

    define("HOST", "localhost");
    define("USER", "root");
    define("DBPSSWD", "");
    define("DATABASE", "my_database");

    $mysqli = new mysqli(HOST, USER, DBPSSWD, DATABASE);

    if($mysqli->connect_errno){
        die($mysqli->connect_error);
    }else{
        echo "database connected";
    }

    //预防敏感错误信息：有时候页面报错同样会暴露一些敏感信息，我们不希望用户看到这些错误信息，可以使用error_reporting(0)
    //比如说，高级用户可以修改前端link使得网页报错，比如include（）修改，报错后，通过报错信息访问一些公共文件，从而看到公共文件的代码，从而信息泄露
?>