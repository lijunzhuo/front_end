<?php
$password = "ruirui520";
echo md5($password) . "<br>";    //将密码encode成MD5格式， 但这种方法可以通过网站破译

$hash1 = password_hash($password, PASSWORD_BCRYPT, ["cost"=>8, "salt"=>"abcdefghijklmnopqrstuvwxyz"]);    //hash 俩加密
$hash2 = password_hash($password, PASSWORD_BCRYPT, ["cost"=>8, "salt"=>"abcdefghijklmnopqrstuvwxyz"]);    //两个加密后密码完全
echo $hash1 === $hash2;
echo "<br>";

//解密
if(password_verify($password, $hash1)){
    echo "password is same"."<br>";
}else{
    echo "passowrd is wrnog"."<br>";
}
?>