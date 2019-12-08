<?php
    if(isset($_GET['name'])){
        print_r($_GET);
    }else if (isset($_POST['name'])){
        print_r($_POST);
    }else if(isset($_REQUEST['name'])){
        print_r($_REQUEST);              //request 无论post， get方法，都可以拿到数据
    }else{
        echo "no response";
    }

    echo $_SERVER["QUERY_STRING"]    //拿到request ？ 后面的内容， 用&连接，必须是get因为get 请求是将数据放到request里的，用&相连
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
    <form action="11_get&post.php" method="GET"> 
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email">
        </div>
        <input type="submit" value="Confirm">
    </form>
</body>
</html>