<?php
 if(isset($_POST["name"])&&isset($_POST["email"])&&isset($_POST["password"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    //链接数据库
    $mysqli = new mysqli("localhost", "root", "", "my_database");

    if($mysqli->connect_errno){
        die($mysqli->connect_error);
    }else{
        //sql 注入攻击: 通过输入加入一些sql语句，对数据库信息进行盗取和破环
        //username = ' OR'1'='1
        //password = ' OR'1'='1 

        echo "mysql connected" . "<br>";
        // $sqlSearchUser = "SELECT * FROM users WHERE `name` = '$name' AND `password` = '$password' AND `email` = '$email'";
        // //$sqlSearchUser = "SELECT * FROM users WHERE `name` = '' or '1'= '1' AND `password` = '' or '1'='1'";   篡改后变为这个
        // $result = $mysqli->query($sqlSearchUser);
        // if($result->num_rows){
        //     while($row = $result->fetch_row()){
        //         print_r($row);
        //     }
        //     //header("location:main.php");

        //sql 防御：将sql与传入的值分开，先将值进行验证，再进行sql语句
        $pre_statement =  $mysqli->prepare("SELECT * FROM users WHERE `name` = ? AND `password` = ? AND `email` = ?");     //准备sql语句
        $pre_statement->bind_param("ss", $name, $password, $email);   //给准备sql语句绑定参数

        //执行sql
        $pre_statement->execute();

        //获取执行后的结果
        $result = $pre_statement->get_result();

        //判断账号密码是否存在
        if($result->num_rows){
            while($row = $result->fetch_row()){
                print_r($row);
            }
            //header("location:main.php");
        }else{
            echo "illegal log in" . "<br>";
        }
    }
 } else{
     echo "invalid input" . "<br>";
 }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1>Register Page</h1>
        <form action="<?php echo $_SERVER["PHP_SELF"]?>" method= "POST">
            <div class="user_name">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" value = "<?php echo isset($_POST["name"])? $_POST["name"]: ""?>" required>
            </div>
            <div class="user_email">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value = "<?php echo isset($_POST["email"])? $_POST["email"]: ""?>" required>
            </div>
            <div class="user_password">
                <label for="password">Password:</label>
                <input type="text" name="password" id="password" value = "<?php echo isset($_POST["password"])? $_POST["password"]: ""?>" required>
            </div>
            <input type="submit" value="Register" name="submit">
        </form>
    </div>
</body>
</html>