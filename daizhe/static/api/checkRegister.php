<?php
	session_start();
	header('Access-Control-Allow-Origin:*');
	include_once 'db.php';
	if(isset($_POST['username'])){
		$username = $_POST['username'];
		$sql = "select * from userinfo where email='$username'";
		// echo $sql;
		$result = mysql_query($sql);
		$num = mysql_num_rows($result);//获取结果集行数
		if($num > 0){
			echo 1;
		}else {
			echo 0;
		}
	}

	//插入用户注册信息
	if(isset($_POST['register'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$registerDate = date("Y-m-d");
		$sql = "INSERT INTO userinfo (nickName, password, headImg, phone, email, registerDate) VALUES ('待着', '$password', '1.jpg', NULL, '$username', '$registerDate')";
		echo $sql;
		echo '<br>';
		$result = mysql_query($sql);
		$row = mysql_affected_rows($link);
		echo '影响行数：'.$row;
	}
?>