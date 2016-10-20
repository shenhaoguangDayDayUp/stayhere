
<?php
include_once "db.php";
?>
<?php
	$sql = "select * from experience";
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
		$sql = "select * from experience limit $index,$pagesize";//分页查询语句
		$result = mysql_query($sql);//获取查询结果集
	}else{
			$currentpage = 1;
			//默认进入该页面的时候从第一条记录进行分页显示
			$result = mysql_query("select * from experience limit 0,$pagesize");
		}
	$resultData = [];
	$arr = [];
	while($row=mysql_fetch_assoc($result)){
		array_push($arr,$row);
	}
	$resultData = [$totalpages,$arr];
	$jsonData = json_encode($resultData);
	echo($jsonData);
?>