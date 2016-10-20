<?php
session_start();
if(isset($_GET['exit'])){
	if(isset($_SESSION['userInfo'])){
		//删除session
		unset($_SESSION['userInfo']);
		echo '<script>location.href="./index.php";</script>';
	}
}else{
	echo '<script>history.back();</script>';
}

?>