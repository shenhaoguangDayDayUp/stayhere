<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>注册页面</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/register.css">
</head>
<body>
     <?php include_once 'header.php' ?>
    <div class="register">
        <div class="register-container">
            <div class="container-content">
                <h1 class="content-h1">用户注册</h1>
                <div class="content-span">
                    <span class="span"></span>
                </div>
                <span class="content-span"></span>

                <div class="content-form">
                    <form class="form-log1">
                        <span class="log1-ico1"></span>
                        <span class="log1-error"></span>
                        <span class="log1-errorImg"></span>
                        <input type="email" class="log1-input" id="email" name="log1-input" placeholder="请输入您注册的邮箱账号" required><span id="emailError" class="error" required></span>
                        <input type="password" class="log1-input" id="psw" name="log1-input" placeholder="以字母开头、包含数字和下划线，6~18位" required><span id="pswError" class="error"></span>
                        <input type="button" name="register" class="form-btn"  value="立即注册" id="register">

                    </form>


                    <p class="form-p1">注册则表示同意 <a href="http://www.daizhe.cn/intro/termsuser">《会员条款》</a></p>
                    <p class="form-p2">已有帐号？<a href="./login.php">登陆</a></p>
                </div>

                <div class="content-huo"></div>
                <div class="content-link">
                    <p class="link-p">使用社交帐号快速注册</p>
                    <a href="https://www.douban.com/service/auth2/auth?client_id=0a3ff3994db34d731ebfdacbe919e859&redirect_uri=http%3A%2F%2Fwww.daizhe.cn%2Fpassport%2Fdoubanlogincallback&response_type=code&scope=douban_basic_common%2Cshuo_basic_w&state=http%3A%2F%2Fwww.daizhe.cn%2Fstatus%2Findex%2Fcategory%2F1" class="link-aclick a1"></a>
                    <a href="https://api.weibo.com/oauth2/authorize?client_id=3227339476&redirect_uri=http%3A%2F%2Fwww.daizhe.cn%2Fpassport%2Fweibologincallback%3Freturn_url%3D%252Fstatus%252Findex%252Fcategory%252F1&response_type=code" class="link-aclick a2"></a>
                    <a href="https://graph.qq.com/oauth/show?which=Login&display=pc&response_type=code&client_id=100554815&redirect_uri=http%3A%2F%2Fwww.daizhe.cn%2Fpassport%2Fqqlogincallback%3Freturn_url%3D%2Fstatus%2Findex%2Fcategory%2F1&state=8e08a0b41c54b3f36a838186389c2e59&scope=get_user_info,add_share,list_album,add_album,upload_pic,add_topic,add_one_blog,add_weibo,check_page_fans,add_t,add_pic_t,del_t,get_repost_list,get_info,get_other_info,get_fanslist,get_idolist,add_idol,del_idol,get_tenpay_add" class="link-aclick a3"></a>
                    <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx3c6fa6d4ec8e53ce&redirect_uri=http%3A%2F%2Fwww.daizhe.cn%2Fpassport%2Fweixinlogincallback&response_type=code&scope=snsapi_base%2Csnsapi_login&state=http%3A%2F%2Fwww.daizhe.cn%2Fintro%2Ftermsuser#wechat_redirect" class="link-aclick a4"></a>

                </div>


            </div>


        </div>
    </div>
    <script src="../js/jquery.js"></script>
    <script src="../js/check.js"></script>
    <?php include_once 'footer.php' ?>
    <?php include_once 'toTop.php' ?>
</body>
</html>