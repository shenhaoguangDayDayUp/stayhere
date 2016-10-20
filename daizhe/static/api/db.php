<?php
$link = mysql_connect('localhost','root','root') or die('连接失败');
mysql_select_db('db_mails');
mysql_query("set names utf8");
