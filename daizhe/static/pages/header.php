<?php 
    session_start();
    if(isset($_GET['style'])){
        $style = $_GET['style'];
    }else{
        $style = 1;
    }
?>
<header>
    <div class="container">
        <a class="logo"><img src="../images/home/logo2.png" alt="待着，只有少数人才懂"></a>
        <nav>
            <a href="./index.php?style=1" <?php echo "class=".($style-1==0?"on":""); ?>>首页</a>
            <a href="./experience.php?style=2" <?php echo "class=".($style-2==0?"on":""); ?>>体验</a>
            <a href="./share.php?style=3" <?php echo "class=".($style-3==0?"on":""); ?>>社区</a>
            <a href="./status.php?style=4" <?php echo "class=".($style-4==0?"on":""); ?>>状态</a>
            <a href="./lifestyle.php?style=5" <?php echo "class=".($style-5==0?"on":""); ?>>待法</a>
            <a href="./client.php?style=6" <?php echo "class=".($style-6==0?"on":""); ?>>待着客户端 <span>New</span></a>
        </nav>
        <ul class="login">
            <li>
                <form action="#" method="get">
                    <input type="text" class="keyword" name="keyword" placeholder="Search">
                    <span class="btn"></span>
                </form>
            </li>
            <li>
                <?php
                    if( $_SERVER['HTTP_REFERER'] == "" )//判断用户是否是直接访问该页面
                    {
                        echo '<script>location.href="index.php"</script>'; exit;
                    }else{//如果不是就执行下面操作
                        if(isset($_SESSION['userInfo'])){//用户登录成功后利用SESSION值显示用户名和用户头像
                            $username = $_SESSION['userInfo']['username'];
                            $image = $_SESSION['userInfo']['image'];
                            echo '<a href="#" class="username">'.$username.'</a><a href="logout.php?exit=1">退出</a><img class="headImg" src="../images/headImgs/'.$image.'">';
                        }else{//如果用户点击了退出，清除session
                            echo '<a href="login.php">登录</a>';
                            echo '<a href="register.php">注册</a>';
                        }
                    }
                ?>
            </li>
            <li>
                <a href="./experience-imd.php?style=2" <?php echo "class=".($style-2==0?"on":""); ?>>发起体验</a>
            </li>
        </ul>
    </div>
</header>