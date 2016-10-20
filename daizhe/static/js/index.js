/**
 * Created by lx on 2016/9/26.
 */

$(function(){
    //轮播图
    var i=-1;
    var bannerLi=$(".banner ul.banner-list li");
    var bannerPlay=function (){
        i++;
        if(i==0){
            bannerLi.eq(4).css({top:650+"px",left:0+"px"});
            bannerLi.eq(5).fadeOut(1000).siblings().show();
            bannerLi.eq(5).css("z-index",88).siblings().css("z-index",66);
            bannerLi.eq(0).stop().animate({top:0+"px",left:0+"px","z-index":999},600);
        }
        if(i==1){
            bannerLi.eq(5).css({top:650+"px",left:100+"%"});
            bannerLi.eq(0).css("z-index",88).siblings().css("z-index",66);
            bannerLi.eq(0).fadeOut(1000).siblings().show();
            bannerLi.eq(1).stop().animate({top:0+"px",left:0+"px","z-index":999},600,function(){
                bannerLi.eq(1).find(".word-show").stop().animate({height:300+"px"},500);
            });
            bannerLi.eq(1).siblings().find(".word-show").css({height:0+"px"});
        };
        if(i==2){
            bannerLi.eq(0).css({top:-650+"px",left:0+"px"});
            bannerLi.eq(1).css("z-index",88).siblings().css("z-index",66);
            bannerLi.eq(1).fadeOut(1000).siblings().show();
            bannerLi.eq(2).stop().animate({top:0+"px",left:0+"px","z-index":999},600,function(){
                console.log(bannerLi.eq(2).find(".word-show"));
                bannerLi.eq(2).find(".word-show").stop().animate({height:300+"px"},500);
            });
            bannerLi.eq(2).siblings().find(".word-show").css({height:0+"px"});
        };
        if(i==3){
            bannerLi.eq(1).css({top:-650+"px",left:-100+"%"});
            bannerLi.eq(2).css("z-index",88).siblings().css("z-index",66);
            bannerLi.eq(2).fadeOut(1000).siblings().show();
            bannerLi.eq(3).stop().animate({top:0+"px",left:0+"px","z-index":999},600,function(){
                bannerLi.eq(3).find(".word-show").stop().animate({height:320+"px"},500);
            });
            bannerLi.eq(3).siblings().find(".word-show").css({height:0+"px"});
        };
        if(i==4){
            bannerLi.eq(2).css({top:-650+"px",left:100+"%"});
            bannerLi.eq(3).css("z-index",88).siblings().css("z-index",66);
            bannerLi.eq(3).fadeOut(1000).siblings().show();
            bannerLi.eq(4).stop().animate({top:0+"px",left:0+"px","z-index":999},600,function(){
                bannerLi.eq(4).find(".word-show").stop().animate({height:300+"px"},500);
            });
            bannerLi.eq(4).siblings().find(".word-show").css({height:0+"px"});
        };
        if(i==5){
            bannerLi.eq(3).css({top:650+"px",left:-100+"%"});
            bannerLi.eq(4).css("z-index",88).siblings().css("z-index",66);
            bannerLi.eq(4).fadeOut(1000).siblings().show();
            bannerLi.eq(5).stop().animate({top:0+"px",left:0+"px","z-index":999},600,function(){
                bannerLi.eq(5).find(".word-show").stop().animate({height:300+"px"},500);
            });
            bannerLi.eq(5).siblings().find(".word-show").css({height:0+"px"});
            i=-1;
        };
        $(".banner .btn").unbind("click");
        setTimeout(function(){
            $(".banner .btn").click(bannerPlay);
        },2000);
    }
    var bannerAutoPlay=setInterval(bannerPlay,3000);

    $(".banner div.word-show a,.banner span.btn").hover(function(){
        clearInterval(bannerAutoPlay);
    },function(){
        bannerAutoPlay=setInterval(bannerPlay,2000);
    });

    $(".banner .btn").click(function(){
        clearInterval(bannerAutoPlay);
        bannerPlay();
    });


    //滚动监听  体验与抢购
    myAnimation();
    document.addEventListener("scroll",function(){
        myAnimation();
    });
    function myAnimation(){

        var bodyScrollTop=document.body.scrollTop;

        var myoffset=700;

        var myactionT=document.querySelector("article.action").offsetTop;
        var action_test=document.querySelector("article.action .action-test");
        var action_buy=document.querySelector("article.action .action-buy");
        if(myactionT<=bodyScrollTop+myoffset){
            action_test.classList.add("changeMGL");
            action_buy.classList.add("changeMGR");
        }else{
            action_test.classList.remove("changeMGL");
            action_buy.classList.remove("changeMGR");
        };

        var winderfulTitleB=document.querySelector(".wonderful-test .test-title p:nth-child(1)");
        var winderfulTitleBT=document.querySelector(".wonderful-test .test-title p:nth-child(1)").offsetTop;
        if(winderfulTitleBT<=bodyScrollTop+myoffset){
            winderfulTitleB.classList.add("addMG");
        }else{
            winderfulTitleB.classList.remove("addMG");
        }

        var go_onTitleB=document.querySelector(".go-on .test-title p:nth-child(1)");
        var go_onTitleBT=document.querySelector(".go-on .test-title p:nth-child(1)").offsetTop;
        if(go_onTitleBT<=bodyScrollTop+myoffset){
            go_onTitleB.classList.add("addMG");
        }else{
            go_onTitleB.classList.remove("addMG");
        }

        var lazyTitleL=document.querySelector(".lazy-test .test-box-title .title-fl");
        var lazyTitleR=document.querySelector(".lazy-test .test-box-title .title-fr");
        var lazyTitleT=document.querySelector(".lazy-test").offsetTop;
        if(lazyTitleT<=bodyScrollTop+myoffset){
            lazyTitleL.classList.add("changeLMG");
            lazyTitleR.classList.add("changeRMG");
        }else{
            lazyTitleL.classList.remove("changeLMG");
            lazyTitleR.classList.remove("changeRMG");
        }

        var talkTitleL=document.querySelector(".talk-about .test-box-title .title-fl");
        var talkTitleR=document.querySelector(".talk-about .test-box-title .title-fr");
        var talkTitleT=document.querySelector(".talk-about").offsetTop;
        if(talkTitleT<=bodyScrollTop+myoffset){
            talkTitleL.classList.add("changeLMG");
            talkTitleR.classList.add("changeRMG");
        }else{
            talkTitleL.classList.remove("changeLMG");
            talkTitleR.classList.remove("changeRMG");
        }

        var goOnShowT=document.querySelector(".go-on .go-on-show").offsetTop;
        //alert(goOnShowT)
        if(goOnShowT<bodyScrollTop+myoffset){
            $(".go-on .go-on-show ul li:nth-child(2)").addClass("li_02");
            $(".go-on .go-on-show ul li:nth-child(3)").addClass("li_03");
            $(".go-on .go-on-show ul li:nth-child(4)").addClass("li_04");
            $(".go-on .go-on-show ul li:nth-child(5)").addClass("li_05");
            $(".go-on .go-on-show .line-show p").addClass("addWidth");
        }else{
            $(".go-on .go-on-show ul li:nth-child(2)").removeClass("li_02");
            $(".go-on .go-on-show ul li:nth-child(3)").removeClass("li_03");
            $(".go-on .go-on-show ul li:nth-child(4)").removeClass("li_04");
            $(".go-on .go-on-show ul li:nth-child(5)").removeClass("li_05");
            $(".go-on .go-on-show .line-show p").removeClass("addWidth");
        }
       
    }



















})