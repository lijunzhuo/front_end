<?php

// 关系运算符
// == === < > <= >=!= !===
// === 和 ！=== 会判断两边的类型
define('condition', 10, true);
if(condition < 20) {
    print "smaller than 20";
    print "You are smart";
}

#如果只有一条语句， 可以省略{}
    if(condition < 20)
        print "smaller than 20";  

#if-else
if(condition < 5){
    echo "number is smaller than 5";
} else if(condition < 7) {
    echo "number is smaller than 7";
}else{
    echo "numbe is bigger than 7";
}

#逻辑运算符
// &&:and：两个为真才为真   ||: or：一个为真即为真  xor:两边一个结果为真才为真

if(condition <20 && condition >1){
    echo "number is smaller than 20 and bigger than 1";
}

#switch
$favColor = "black";

switch($favColor){
    case "rea":
        echo "I love rea";
        break;
    case "black":
        echo "I love black";
        break;
    default:
        echo "I love you";
        break;
}

?>