<?php

if(isset($_POST["login_submit"])){
    $loginEmail = sanitizeString($_POST["login_email"]);
    $loginPassword = sanitizeString($_POST["login_password"]);
} 
?> 
