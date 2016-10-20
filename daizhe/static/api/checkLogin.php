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
			$data = 1;
			$row = mysql_fetch_array($result);
			if(isset($_POST['password'])){
				$password = $_POST['password'];
				if($password == $row['password']){
					//用户名和密码验证成功
					$data = 2;
					//默认设置SESSION,保存用户名和用户头像
					$_SESSION['userInfo'] = ['username'=>$row['nickName'],'image'=>$row['headImg']];
					// var_dump($_SESSION['userInfo']);
					//判断是否记住密码,记住就设置cookie
					// $data = $_POST['rememberInfo'];
					if(isset($_POST['rememberInfo']) && $_POST['rememberInfo']){
						$userInfo = ['username'=>$username,'password'=>$password,'image'=>$row['headImg']];
						$userStr = serialize($userInfo);
						setcookie('user',$userStr,time()+60*60*24*15);
					}
				}else{
					//密码有误
					$data = 3;
				}
			}
		}else{
			//当为0时表示用户名不存在
			$data = 0;
		}
		echo $data;
	}

	

?>