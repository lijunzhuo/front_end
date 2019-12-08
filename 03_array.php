<?php
    #下标数组
    $people = array('Leo', 'Tia');
    echo $people[0];

    $name = ["Leo", "Tia"];
    echo $name[1];

    #添加数组内容
    $name[2] = "Kobe";
    #在最后面添加
    $name[] = 'Jordan';
    #计算数组有多少个
    echo count($people);

    #转为数组打印的方法
    print_r($people);

    #万能打印方法
    var_dump($name);


    #关联数组
    $group = array('Leo'=>100, 'Tia'=>200, "Tracy"=> 300);
    echo $group['Leo'];

    #添加
    $group['bill'] = 400;
    print_r($group);


    #多维数组
    $big = array(
        array("Benz", 100),
        array("Proche", 200),
        array("Farrari", 300),
    );

    var_dump($big);

    echo $big[0][0];
 ?>