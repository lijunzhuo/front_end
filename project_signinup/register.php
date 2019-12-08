<?php
    //公共大家都要使用的函数做成一个类
    include("./includes/classes/account.php");

    //实例化公共对象
    $account = new Account();

    //引入基本常量
    include("./includes/classes/constants.php");

    //将处理步骤单独写到文件里再inlcude进来
    include("./includes/handlers/registerHandler.php");
    include("./includes/handlers/loginHandler.php");
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
</head>
<body>
    <div class="container">
        <h1>Register Page</h1>
        <form action="<?php echo $_SERVER["PHP_SELF"]?>" method= "POST">
            <div class="user_name">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" value = "<?php echo isset($_POST["name"])? $_POST["name"]: ""?>" required>
                <?php echo $account->getError(Constants::$nameLength)?>
            </div>
            <div class="user_email">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value = "<?php echo isset($_POST["email"])? $_POST["email"]: ""?>" required>
                <?php echo $account->getError(Constants::$emailValid)?>
            </div>
            <div class="user_password">
                <label for="password">Password:</label>
                <input type="text" name="password" id="password" value = "<?php echo isset($_POST["password"])? $_POST["password"]: ""?>" required>
                <?php echo $account->getError(Constants::$passwordLength)?>
                <?php echo $account->getError(Constants::$passwordChoose)?>
            </div>
            <input type="submit" value="Register" name="submit">
        </form>
        <hr>
        <h1>Login Page</h1>
        <form action="<?php echo $_SERVER["PHP_SELF"]?>" method= "POST">
            <div class="login_email">
                <label for="login_email">Email:</label>
                <input type="login_email" name="login_email" id="login_email" value = "<?php echo isset($_POST["login_email"])? $_POST["login_email"]: ""?>" required>
            </div>
            <div class="login_password">
                <label for="login_password">Password:</label>
                <input type="text" name="login_password" id="login_password" value = "<?php echo isset($_POST["login_password"])? $_POST["login_password1"]: ""?>" required>
            </div>
            <input type="submit" value="Login" name="login_submit">
        </form>
    </div>
</body>
</html>