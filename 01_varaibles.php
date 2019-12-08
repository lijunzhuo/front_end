<?php 

#D:localhost\study\01_varaibles.php

$output = "Hellow varaible";
#开投必须是$, 以字母下划线开头， 由数字/字母/下划线组成， 驼峰命名， 大小写敏感

#数据类型： String, Integer, Float, Boolean, Array, Object, Null, Resource
#string: $output = "Hellow"
#Integer: $output=1
#float: $output=5.0
#boolean: $output=false

#变量相加
#1）integer变量 
$output1 = 10;
$output2 = 20;
echo $output1 + $output2;   #20

#) string 变量
$output3 = 'I am Leo';
$output4 = " Hellow !";
#echo $output3 + $output4;  #0 

#字符串拼接方法
echo $output3 . $output4;

#'' VS ""
#'': 编译器会认为这‘’里的是纯字符串
#：”“” 编译器会自动转译”“中的变量
$output5 = "$output3 . $output4";
$output6 = '$output3 . $output4';
echo $output5;
echo $output6;

#转移字符
$output = 'they\'re here';

#定义常量
define("Greeding", "Hellow world", true);   #true 代表大小写都可以
echo Greeding;
echo greeding;

echo "<h1>hellow by echo</h1>";
print " hellow by print";
echo $output;
?>