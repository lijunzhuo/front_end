<?php
    #for-loop
    for($i = 0; $i < 10; $i ++){
        echo $i;
        echo '<br>';
    }

    #while-loop
    while($i < 10){
        echo $i;
        echo '<br>';
        $i ++;
    }

    #do-while
    do{
        echo $i;
        echo '<br>';
        $i ++;  
    }
    while($i < 10);

    #for-each
    $list = array('Kobe', "leo", "Tia");
    foreach($list as $item){
        echo $item;
        echo '<br>';
    }

    $list1 = ["kobe"=>100, "Leo"=>1000];
    foreach($list1 as $name=>$score){
        echo $name . $score;
        echo '<br>';
    }
?>