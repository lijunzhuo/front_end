<?php

#简写if-else。 三联运算符
$isTrue = true;
$score = 100;

echo ($isTrue)? "You are logged in " : "Youre are not logged in"; 

echo "your grade is: " . ($score > 50? ($score > 80? "perfect": "good"): "pass")
?>

<div>
    <?php if($isTrue){ ?>
        <h3>Welcome</h3>
    <?php }else{?>
        <h3>you are logged out</h3>
    <?php }?>
</div>


<!-- 更美观 -->

<div>
    <?php if($isTrue):?>
        <h3>Welcome</h3>
    <?php else:?>
        <h3>you are not logged in</h3>
    <?php endif;?>
</div>

<!--for-loop -->

<div>
    <?php for($i = 0; $i <10; $i ++):?>
        <h3><?php echo "$i <br>";?></h3>
    <?php endfor;?>
</div>

<!--foreach-loop -->
<?php $param = ["Leo","Tia","Kobe"];?>
<div>
    <?php foreach($param as $item):?>
        <h3><?php echo "$item <br>"?></h3>
    <?php endforeach;?>
</div>