<?php

    $param = "     abcdefg      hijklmn    ";

    #sub(从哪个字符串截取去， 从哪个index开始， 从哪个index结束):
    $output1 = substr($param , 1,5);
    $output2 = substr($param, -1);    // 从最后开始截取
    echo "$output1 <br>";

    #strlen(): 字符串长度
    $output3 = strlen($param);
    echo "$output3 <br>";

    #strpos(): 寻找字符在字符串里第一次出现的位置
    $output4 = strpos($param, 'c');
    echo "$output4 <br>";

    #strrpos(): 寻找字符在字符串里最后一次出现的位置
    $output5 = strrpos($param, 'c');
    echo "$output5 <br>";

    #trim(): 去除首尾空格
    $output6 = trim($param);
    echo "$output6 <br>";

    #strtoupper(): 将字符串转为大写
    $output7 = strtoupper($param);
    echo "$output7 <br>";

    #strtolower(): 将字符串转为小写
    $output8 = strtolower($param);
    echo "$output8 <br>";

    #ucwords(): 每个单词首字母大写
    $output9 = ucwords($param);
    echo "$output9 <br>";

    #str_replace(要替换什么，被什么替换， 从哪个subject里替换 ): 见字符串中特定替换
    $output10 = str_replace('abc', '666', $param);
    echo "$output10 <br>";

    #is_string(): 判断是否为字符串
    $output11 = is_string($param,);
    echo "$output11 <br>";   #返回1

    #gzcompress(): 将字符串压缩
    $output12 = gzcompress($param);
    echo "$output12 <br>";

    #gzuncompress(): 将字符串压缩
    $output13 = gzuncompress($output12);
    echo "$output13 <br>";
?>