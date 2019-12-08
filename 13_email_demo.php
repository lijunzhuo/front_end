<?php

$err ="";

if(filter_has_var(INPUT_POST, 'submit')){
    $name = $_POST["name"];
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = $_POST["message"];
    print_r($_POST);

    if(!empty($name) && !empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $toEmail = "12345@gmail.com";
            $subject = "Contact Request";
            $body = "<h2>Cintact Request</h2><h4>Name:</h4><p>$name</p><h4>Email:</h4><p>$email</p><h4>Message:</h4>><p>$message</p>";
            $headers = "MIME-Version:1.0"."\r\n";
            $headers .= "Content-Type:text/html;charset=UTF-8"."\r\n";
            $headers .= "From: ".$name."<$email>" ."\r\n";

            if(mail($toEmail, $subject, $body, $headers)){
                echo "email sent";
            }else{
                echo "email fail send";
            }
        }else{
            $err ="email error";
        }
    }else{
        $err = "content should not empty";
    }

}else {
    echo "no submit";
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email Demo</title>
</head>
<body>
    <form action="13_email_demo.php" method="POST"> 
        <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id= "name" value ="<?php echo isset($_POST["name"])? $_POST["name"]: ''?>">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id= "email" value ="<?php echo isset($_POST["email"])? $_POST["email"]: ''?>">
        </div>
        <div>
            <label for="message">Message:</label>
            <input type="text" name="message" id= "message" value ="<?php echo isset($_POST["message"])? $_POST["message"]: ''?>">
        </div>
        <input type="submit" value="Confirm" name="submit">
    </form>
    <?php if($err != ""):?>
        <div>Error: <?php echo $err?></div>
    <?php endif?>
</body>
</html>