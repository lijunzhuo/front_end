<?php

class Person{
    public $name;
    protected $email;
    private $age;

    public function setDate($name, $email, $age){
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }

    public function getName(){
        return $this->name;
    }

    //构造函数，构造类型时自动执行
    public function __construct($name, $email, $age){
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }

    //析构函数（自执行函数），销毁此类实例自动执行
    public function __destruct(){
        echo __CLASS__." has been destroyed";
    }
}

//创建类并自动调取构造函数
$person1 = new Person("Leo", "12345@gmail.com", 18);
//$person1->setDate("Leo", "12345@gmail.com", 18);
echo $person1->getName();

class Customer extends Person{
    public $salary = 2000;

    public function setSalary($salary){
        $this->salary = $salary;
    }

    public function getSalary(){
        return $this->salary;
    }

    public function __construct($name, $emial, $age, $salary){
        //调用父级构造函数
        parent::__construct($name, $emial, $age);
        $this->salary = $salary;
    }
}

$customer1 = new Customer("Leo Li", "12345@gmail.com", 18, 80000);
echo $customer1->name;
echo $customer1->salary;



?>