<?php
function sanitizeString($name){
    $final = strip_tags($name);   //去掉所有标签
    $final = str_replace(" ", "", $name);   //替换掉所有空格
    $final = ucfirst(strtolower($name));    //首字母大写，其他字母小写
    return $final;
}

if(isset($_POST["submit"])){
    $registerName = sanitizeString($_POST["name"]);
    $registerEmail = sanitizeString($_POST["email"]);
    $registerPassword = sanitizeString($_POST["password"]);

    $isSuccess = $account->register($registerName, $registerEmail, $registerPassword);
    if($isSuccess){
        //注册成功实现跳转
        echo "success jump";
        header("location: main.php");
    }else{
        echo "jump fail";
    }
} 
?>