<?php 

$param = [1,2,3,4];

#array():新建数组， 返回一个数组
$output1 = array(1,2,3,4);
print_r($output1);

#count():返回数组长度
$output2 = count($param);
print_r($output2);

#array_push():在数组末尾添加
array_push($param, 5);
print_r($param);

#array_pop():在数组末移除
array_push($param);
print_r($param);

#array_unshift():在数组头部添加
array_unshift($param, 8);
print_r($param);

#array_shift():在数组开头删除
array_shift($param);
print_r($param);

#sort():在数组排序
sort($param);
print_r($param);

#implode(以什么将字符串项链， 要操作的字符串):在数组转化为字符串
implode(',',$param);
print_r($param);

#explode(以什么将字符串项链， 要操作的字符串):在字符串转化为数组
explode(',', 'abcde');
print_r($param);

?>