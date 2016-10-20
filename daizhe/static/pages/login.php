<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>
     <?php include_once 'header.php' ?>
     <?php
        if(isset($_COOKIE['user'])){
            $user = $_COOKIE['user'];
            $userInfo = unserialize($user);
            $rememberInfo = 'checked="checked"';
        }
    ?>
    <div class="user-login">
        <div class="login-container">
            <div class="container-content">
                <h1 class="content-h1">用户登录</h1>
                <div class="content-link">
                    <a href="https://www.douban.com/service/auth2/auth?client_id=0a3ff3994db34d731ebfdacbe919e859&redirect_uri=http%3A%2F%2Fwww.daizhe.cn%2Fpassport%2Fdoubanlogincallback&response_type=code&scope=douban_basic_common%2Cshuo_basic_w&state=http%3A%2F%2Fwww.daizhe.cn%2F" class="link-aclick a1"></a>
                    <a href="https://api.weibo.com/oauth2/authorize?client_id=3227339476&redirect_uri=http%3A%2F%2Fwww.daizhe.cn%2Fpassport%2Fweibologincallback%3Freturn_url%3D%252F&response_type=code" class="link-aclick a2"></a>
                    <a href="https://graph.qq.com/oauth/show?which=Login&display=pc&response_type=code&client_id=100554815&redirect_uri=http%3A%2F%2Fwww.daizhe.cn%2Fpassport%2Fqqlogincallback%3Freturn_url%3D%2F&state=ec418b77bd79bf8f6e1a4692063f03ed&scope=get_user_info,add_share,list_album,add_album,upload_pic,add_topic,add_one_blog,add_weibo,check_page_fans,add_t,add_pic_t,del_t,get_repost_list,get_info,get_other_info,get_fanslist,get_idolist,add_idol,del_idol,get_tenpay_add" class="link-aclick a3"></a>
                    <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx3c6fa6d4ec8e53ce&redirect_uri=http%3A%2F%2Fwww.daizhe.cn%2Fpassport%2Fweixinlogincallback&response_type=code&scope=snsapi_base%2Csnsapi_login&state=http%3A%2F%2Fwww.daizhe.cn%2F#wechat_redirect" class="link-aclick a4"></a>
                    <p class="link-p">使用以上社交网络帐号登录</p>
                </div>
                <div class="content-huo"></div>
                <form class="content-form">
                    <div class="form-log1">
                        <span class="log1-ico1"></span>
                        <span class="log1-error"></span>
                        <span class="log1-errorImg"></span>
                        <input type="text" value="<?php echo @$userInfo['username']; ?>" class="log1-input" name="username" id="uname" placeholder="请输入您注册的邮箱账号" pattern="([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+" required><span id="unameError" class="error"></span>
                    </div>
                    <div class="form-log2">
                        <span class="log2-ico2"></span>
                        <span class="log2-error"></span>
                        <span class="log2-errorImg"></span>
                        <input type="password" value="<?php echo @$userInfo['password']; ?>" class="log2-input" id="psw" name="password" placeholder="密码" maxlength="12" required><span id="pswError" class="error"></span>
                    </div>
                    <input type="button" class="form-btn" name="submit" value="登录" id="submit">
                    <div class="form-log3">
                        <label class="log3-label">
                            <input type="checkbox" id="isRemember" <?php echo @$rememberInfo; ?>> 记住我
                        </label>
                        <a href="http://www.daizhe.cn/passport/resetpassword">忘记密码？</a>
                    </div>
                    <p class="form-p">还没有账号？<a href="./register.php">注册</a></p>

                </form>

            </div>
        </div>

    </div><!--end user-login-->
    <script src="../js/jquery.js"></script>
    <script src="../js/check.js"></script>
    <?php include_once 'footer.php' ?>
    <?php include_once 'toTop.php' ?>
</body>
</html>