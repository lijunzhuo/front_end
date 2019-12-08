<?php
#创建服务器数组信息
$server = [
    "Host Server Name"=> $_SERVER["SERVER_NAME"],     //localhost
    "Server Software"=> $_SERVER["SERVER_SOFTWARE"],     //Apache/php......
    "DOcument Root"=> $_SERVER["DOCUMENT_ROOT"],     //applications/XAMPP/xamppfiles....
    "HTTP Host"=> $_SERVER["HTTP_HOST"],  //localhost
    "script name"=>$_SERVER["SCRIPT_NAME"],   //当前文件路径
    "absolute path"=> $_SERVER["SCRIPT_FILENAME"],     //文件的绝对路径
    "current_page"=> $_SERVER["PHP_SELF"], //与scirpt_name 相似

];

print_r($server);

echo '<br>';
#创建客户端数组信息
$client = [
    "Client System Info"=> $_SERVER["HTTP_USER_AGENT"],   //当前浏览器的信息
    "client IP"=>$_SERVER["REMOTE_ADDR"],     //当前IP 地址
    "Remote Port"=> $_SERVER["REMOTE_PORT"],     //用户端口号
];

print_r($client);

?>