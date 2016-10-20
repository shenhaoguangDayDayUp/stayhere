<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>社区</title>
    <link rel="stylesheet" href="../css/base.css"/>
    <link rel="stylesheet" href="../css/share.css"/>
    <!--增加轮播图-->
    <script src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/share-move.js"></script>
    <script src="../js/share.js"></script>
    <script src="../js/common.js"></script>
</head>
<body>
<?php include_once 'header.php' ?>
<div class="share">
    <!--上部-->
    <section class="share-section">
        <!--轮播图-->
        <article class="article-carousel">
            <div id="automatic">
                <div class="prev_div"></div>
                <a class="prev" href="###">
                    <span class="ico1"></span>
                    <span class="ico"></span>
                    <span class="txt"></span>
                </a>

                <div class="next_div"></div>
                <a class="next" href="###">
                    <span class="ico1"></span>
                    <span class="ico"></span>
                    <span class="txt"></span>
                </a>

                <ul>
                    <li class="pos-li pos_0"><img class="pos-img" src="../images/share/20151218103844644.jpg" width="100" /></li>
                    <li class="pos-li pos_1"><img class="pos-img" src="../images/share/20151218183314830.jpg" width="270" /></li>
                    <li class="pos-li pos_2"><img class="pos-img" src="../images/share/20151218183331308.jpg" width="510" /></li>
                    <li class="pos-li pos_3"><img class="pos-img" src="../images/share/20151218183435372.jpg" width="700" /></li>
                    <li class="pos-li pos_4"><img class="pos-img" src="../images/share/20151218103844644.jpg" width="510" /></li>
                    <li class="pos-li pos_5"><img class="pos-img" src="../images/share/20151218183314830.jpg" width="270" /></li>
                    <li class="pos-li pos_6"><img class="pos-img" src="../images/share/20151218183331308.jpg" width="270" /></li>
                    <li class="pos-li pos_6"><img class="pos-img" src="../images/share/20151218183435372.jpg" width="270" /></li>
                </ul>
            </div>
        </article>
        <!--信息-->
        <article class="article-middle">
            <!--tab切换-->
            <div class="middle-left">
                 <!-- tab 标题-->
                <div class="left-table">
                    <ul id="article-left-table">
                        <li class="li"><a>全部</a></li>
                        <li><a>官方活动</a></li>
                        <li><a>体验报告</a></li>
                        <li><a>少数人·生活访谈</a></li>
                    </ul>
                </div>
                <!-- tab  内容-->
                <div class="left-content">
                    <div class="content-header">
                        <div class="header">
                            <a href="http://www.daizhe.cn/share/index/type/6/sub/0/topic/0#start" class="a">最新</a>
                            <a href="http://www.daizhe.cn/share/index/type/6/order/1/sub/0/topic/0#start">热门</a>
                            <a href="http://www.daizhe.cn/share/index/type/6/order/2/sub/0/topic/0#start">精华</a>
                        </div>
                    </div>
                    <!--内容-->
                    <div class="content-info" id="content-info-table">
                        <ul class="info" id="js_showShare"></ul>
                        <div class="pagenav" id="pagenav"></div>
                    </div>
                </div>
            </div>
            <div class="middle-right">
                <div class="top">
                    <a href="./login.html"><i></i>发布新帖</a>
                </div>
                 <div class="top nav-title" id="main-nav-top">
                    <a href="./login.html"><i></i>发布新帖</a>
                </div>
                <div class="btn-middle">
                    <div class="first">
                        <a href="http://www.daizhe.cn/experience/1014?from=ld_shequliebiaoyouce"><img src="../images/share/20151218184027901.jpg"/></a>
                    </div>
                    <div class="event">
                        <div class="event-border">
                            <h3>热门用户</h3>
                            <div>
                                <ul>
                                    <li><a href=""><img src="../images/headImgs/1.png"/></a></li>
                                    <li><a href=""><img src="../images/headImgs/2.png"/></a></li>
                                    <li><a href=""><img src="../images/headImgs/3.png"/></a></li>
                                    <li><a href=""><img src="../images/headImgs/4.png"/></a></li>
                                    <li><a href=""><img src="../images/headImgs/5.png"/></a></li>
                                    <li><a href=""><img src="../images/headImgs/6.png"/></a></li>
                                    <li><a href=""><img src="../images/headImgs/7.png"/></a></li>
                                    <li><a href=""><img src="../images/headImgs/8.png"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="event-bottom">
                            <h3>热门帖子</h3>
                            <div>
                                <ul class="picBox2">
                                    <li><i class="one"></i><a href="">不要再放肆</a></li>
                                    <li><i class="two"></i><a href="">活死人</a></li>
                                    <li><i class="three"></i><a href="">我只想取悦自己</a></li>
                                    <li><i class="forth"></i><a href="">有胃病怎么办</a></li>
                                    <li><i></i><a href="">梦境～持续更新</a></li>
                                    <li><i></i><a href="">Waiting</a></li>
                                    <li><i></i><a href="">^_^^_^</a></li>
                                    <li><i></i><a href="">录完了</a></li>
                                    <li><i></i><a href="">片段</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    </section>
</div>
    <?php include_once 'footer.php' ?>
    <?php include_once 'toTop.php' ?>
</body>
</html>