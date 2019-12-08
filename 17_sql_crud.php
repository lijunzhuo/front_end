<?php

#连接数据库
// $mysqli = new mysqli("localhost", "root", "", "my_database");

// if($mysqli->connect_errno){
//     die($mysqli->connect_error);
// }else{
//     //echo "mysql is connected";
//     //摄动编码格式
//     $mysqli->query("set names utf8");
//     $result = $mysqli->query("INSERT INTO `customer` (`name`, `age`) VALUES ('Kobe', 18)");
//     if($result){
//         echo "success";
//     }else{
//         echo "fail";
//     }
// }

// //关闭数据库
// $mysqli->close();

function sqlRun($sql){
    #连接数据库
    $mysqli = new mysqli("localhost", "root", "", "my_database");

    if($mysqli->connect_errno){
        die($mysqli->connect_error);
    }else{
        //echo "mysql is connected";
        //摄动编码格式
        $mysqli->query("set names utf8");
        $result = $mysqli->query($sql);
        if($result){
            echo "success <br>";
            return $result;
        }else{
            echo "fail";
        }
    }

    //关闭数据库
    $mysqli->close();
}

//添加数据
$sqlInsert = "INSERT INTO `customer` (`name`, `age`) VALUES ('Kobe', 18)";
$sqlUpdate = "UPDATE customer SET `age` = 20 WHERE `name` = 'Kobe'";
$sqlDelete = "DELETE FROM customer WHERE `id` = '3'";
$sqlSelect = "SELECT * FROM customer";
//sqlRun($sqlInsert);
//sqlRun($sqlUpdate);
//sqlRun($sqlDelete);
$result = sqlRun($sqlSelect);

//方法1： fetch_row()
if($result->num_rows){
    while($row = $result->fetch_row()){  //拿到的数据被放在数组里
        //print_r($row);
        foreach($row as $item){
            echo $item . "<br>";
        }
    }
};

//方法2：fetch_array()
if($result->num_rows){
    while($row = $result->fetch_array(MYSQLI_ASSOC)){  //拿到的数据被放在数组里
        //print_r($row);
        foreach($row as $item){
            echo $item . "<br>";
        }
    }
};

//方法3： 
$row = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($row);

?>