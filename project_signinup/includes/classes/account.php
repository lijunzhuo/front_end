<?php

class Account{
    private $errArray;
    public function __construct(){
        $this->errArray = [];
    }

    //给外部以公接口，外部可以调用
    public function register($name, $email, $password){
        $this->validateName($name);
        $this->validateEmail($email);
        $this->validatePassowrd($password);

        if(empty($this->errArray)){
            //将得到的信息插入数据库
            return true;
        }else{
            print_r($this->errArray);
            return false;
        }
    }

    public function getError($err){
        if(in_array($err, $this->errArray)){
            return "<span>$err</span>";
        } else{
            return '';
        }
    }

    private function validateName($name){
        if(strlen($name) <2 || strlen($name) >25){
            array_push($this->errArray, "name should longger than 2 and shorter than 25");
            return; 
        }
        //检查用户名是否存在
    }

    private function validateEmail($email){
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            array_push($this->errArray, "invalid emial");
            return;
        }
        //检查email是否合法
    }

    private function validatePassowrd($password){
        if(strlen($password) <2 || strlen($password) > 25){
            array_push($this->errArray, "password should longger than 2 and shorter than 25");
            return; 
        }
        if(preg_match('/[^A-Za-z0-9]/', $password)){
            array_push($this->errArray, "password should only contain A_Z, a-z, 0-9");
            return;
        }
    }
}

?>