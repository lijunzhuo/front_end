<?php include "./08_head.php"?>
<body>
    <h1>This is home</h1>
    <a href="08_product.php">Product</a>
    <?php require ("./08_footer.php")?>
</body>
</html>


<?php
# require VS include VS　include_once VS require_once
# require: 一旦报错， 后面的代码就不会执行
# include： 报错也会把后面的代码执行完
# 两个加不加括号都行
?>