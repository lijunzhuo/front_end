<?php
function simpleFunction(){
    echo "Helow World";
}

simpleFunction();


function printString($name){
    echo "my name is $name";
}

printString("Leo");


function add($num1, $num2){
    return $num1 + $num2;
}

echo add(1,2);

$num = 10;
function sum(&$num3){
    return $num3 += 10;
}

sum($num);

echo $num;

?>