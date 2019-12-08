<?php
#cookie 是存储于浏览器上的的一段代码

$err ="";

if(filter_has_var(INPUT_POST, 'submit')){
    $name = $_POST["name"];
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = $_POST["message"];
    print_r($_POST);

    #存储都cookie;

    setcookie("name", $name, time()+3600);   //3600秒后过期
    setcookie("emial", $email, time() + 3600);
    setcookie("message", $message, time() + 3600);

    //跳转到page2.php
    //header("Location:page2.php");                 

    #获得cookie， 最好放在另一个文件中
    $get_name = $_COOKIE["name"];
    $get_email = $_COOKIE["email"];
    $get_message = $_COOKIE["message"];


    #修改cookie
    setcookie('name', 'Leo', time()+86400*30);

    #删除cookie
    setcookie("name", "Leo", time()-3600);
    $count = count($_COOKIE);
    #删除所有cookie
    session_destroy();

}else{
    echo "no submit";
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email Demo</title>
</head>
<body>
    <form action="<?php echo $_SERVER["PHP_SELF"];?>" method="POST"> 
        <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id= "name" value ="<?php echo isset($_POST["name"])? $_POST["name"]: ""?>">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id= "email" value ="<?php echo isset($_POST["email"])? $_POST["email"]: ''?>">
        </div>
        <div>
            <label for="message">Message:</label>
            <input type="text" name="message" id= "message" value ="<?php echo isset($_POST["message"])? $_POST["message"]: ''?>">
        </div>
        <input type="submit" value="Confirm" name="submit">
    </form>
    <?php if($err != ""):?>
        <div>Error: <?php echo $err?></div>
    <?php endif?>
</body>
</html>