
<?php
include_once "db.php";
?>
<?php
	if(isset($_GET['fileName'])){
		$fileName = $_GET['fileName'];
		$sql = "select * from $fileName";
		$result = mysql_query($sql);
		//获取数据总记录数
		$num = mysql_num_rows($result);
		$pagesize=10;//设置每页显示10条记录
		//计算总页数
		$totalpages = ceil($num/$pagesize);
		// var_dump($totalpages);
		if(isset($_GET['page'])){
			$currentpage = $_GET['page'];
			$index = ($currentpage-1)*$pagesize;//获取当前页第一条记录在数据库中的索引
			if($fileName == 'share'){
				$sql = "select share.userId,share.sTitle,share.sContent,share.sDate,share.scanNum,share.likeNum,share.commNum,userinfo.headImg,userinfo.nickName from share,userinfo where share.userId = userinfo.userId limit $index,$pagesize";
			}else{
				$sql = "select * from $fileName limit $index,$pagesize";//分页查询语句
			}
			$result = mysql_query($sql);//获取查询结果集
		}else{
				$currentpage = 1;
				//默认进入该页面的时候从第一条记录进行分页显示
				if($fileName == share){
					$result = mysql_query("select share.userId,share.sTitle,share.sContent,share.sDate,share.scanNum,share.likeNum,share.commNum,status.headImg,status.nickName from share,status where share.userId = status.userId limit 0,$pagesize");
				}else{
					$result = mysql_query("select * from $fileName limit 0,$pagesize");
				}
			}
		$resultData = [];
		$arr = [];
		while($row=mysql_fetch_assoc($result)){
			array_push($arr,$row);
		}
		$resultData = [$totalpages,$arr];
		$jsonData = json_encode($resultData);
		echo($jsonData);
	}
?>