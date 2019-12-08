<?php
if(filter_has_var(INPUT_POST, "name")){   //filter_has_var：用于查看是否有这个值   INPUT_POST 是系统自带的函数， “name” 是根据name属性来的
    echo $_POST["name"];
} else {
    echo "no name";
}

//验证邮箱
if(isset($_POST['email'])){
    if(filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL)){          //查看邮箱是否合法
        echo $_POST['email'];
    }else{
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);    //去掉邮箱里不合法的字符
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            echo "email is legal";
        }else{
            echo "email is illegal";
        }
    }
}

//filter_var(): 
// FILTER_VALIDATE_BOOLEAN
// FILTER_VALIDATE_EMAIL
// FILTER_VALIDATE_FLOAT
// FILTER_VALIDATE_INT
// FILTER_VALIDATE_IP
// FILTER_VALIDATE_REGEXP
// FILTER_VALIDATE_URL

// FILTER_SANITIZE_EMAIL
// FILTER_SANITIZE_ENCODED
// FILTER_SANITIZE_NUMBER_FLOAT
// FILTER_SANITIZE_NUMBER_INT
// FILTER_SANITIZE_SPECIAL_CHARS
// FILTER_SANITIZE_STRING
// FILTER_SANITIZE_URL


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>fliter_function</title>
</head>
<body>
    <div>
        <form action="<?php echo $_SERVER["PHP_SELF"]?>" method="POST">
            <label for="name">Name:</label>
            <input type="text" name = "name" id="name">            
            <label for="email">Email:</label>
            <input type="text" name = "email" id="email">
            <input type="submit" value="Confirm">
        </form>
    </div>
</body>
</html>