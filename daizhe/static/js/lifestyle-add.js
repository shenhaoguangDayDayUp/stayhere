/**
 * Created by 马超越 on 2016/9/28.
 */
$(function(){
    var a=new sHover("bg-common","mask");

//			a.set({
////				slideSpeed:5,
////				opacityChange:true,
////				opacity:90
//			});
    //-------------点击蒙版取消，并且加上阴影效果
//			$("li[class^='bg']").hover(function(){
//				$(this).find(".mask").stop().fadeOut(600);
//				$(this).stop().delay(100).css("box-shadow","-2px 0 5px #08383B,0 -2px 5px #08383B,0 2px 5px #08383B,2px 0 5px #08383B");
//			},function(){
//				$(this).find(".mask").stop().fadeIn(300);
//				$(this).stop().delay(100).css("box-shadow","none");
//			});


    //-------------图片3D切换效果
    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ).hide(),
            $shadow = $( '#shadow' ).hide(),
            slicebox = $( '#sb-slider' ).slicebox( {
                onReady : function() {

                    $navArrows.show();
                    $shadow.show();

                },
                orientation : 'r',
                cuboidsRandom : true,
                disperseFactor : 30,
                autoplay : true
            } ),

            init = function() {

                initEvents();

            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':first' ).on( 'click', function() {

                    slicebox.next();
                    return false;

                } );

                $navArrows.children( ':last' ).on( 'click', function() {

                    slicebox.previous();
                    return false;

                } );

            };

        return { init : init };

    })();

    Page.init();

    //--------------根据切换的图片显示对应的图片信息
    var picIndex = 0; //从0开始

    //标题跟图片一起加载
    var picPlayTime = setInterval(function(){
        picPlay();
    },3200);

    //鼠标移上去，播放停止，离开继续播放
//			$("#sb-slider").hover(function(){
//				clearInterval(picPlayTime);
//			},function(){
//				picPlayTime = setInterval(function(){
//					picPlay();
//				},3000);
//			});
    //播放
    function picPlay(){
        picIndex++;//下标+1

        $(".pic-info").children().eq(picIndex).fadeIn(600).siblings().stop().fadeOut(200);
        //如果4张遍历完毕，那么下标归-1，因为要从第一张开始走
        if(picIndex == 3){
            picIndex = -1;
        }
    }
    //点击下一张
//			$("#nextPic").click(function(){
//				picPlay();
//			});
    //点击上一张
//			$("#prevPic").click(function(){
//				picIndex--;//点击下一张下标+1
//
//				$(".pic-info").children().eq(picIndex).fadeIn(600).siblings().stop().fadeOut(200);
//				//如果4张遍历完毕，那么下标归4，因为要从第四张开始走
//				if(picIndex == 0){
//					picIndex = 4;
//				}
//			});

    //--------------移上去图片变颜色
    $(".appBox-list li[class^='li']").hover(function(){
        var path = $(this).css("background-image");
        var newPath = path.substring(0,path.lastIndexOf('.'))+"-color.png\")";
        //设置新路径
        $(this).stop().css("background-image",newPath);
    },function(){
        var path = $(this).css("background-image");
        var newPath = path.substring(0,path.lastIndexOf('-'))+".png\")";
        //设置新路径
        $(this).stop().css("background-image",newPath);
    });


    //--------------国家移上去变颜色
    $(".continent-list.clear").children().hover(function(){
        $(this).stop().css("background","");
        $(this).stop().css("background","url(../images/lifestyle/"+$(this).prop("class")+".png) 0 10px no-repeat");

        var index = $(this).index();
        //同步文字
        $('.country-list li').eq(index).stop().css("background-color","#ECECEC").siblings().stop().css("background-color","#F5F5F5");

        if(index == 1 || index == 2 || index == 3){
            $(this).stop().css("background-position","43px 10px");
        }
        if(index == 4){
            $(this).stop().css("background-position","45px 14px");
        }
    },function(){
        $(this).stop().css("background","none");
    });


    //--------------文字移上去变颜色
    $('.country-list li').mouseover(function(){
        $(this).stop().css("background-color","#ECECEC").siblings().stop().css("background-color","#F5F5F5");
        $(".continent-list.clear").children().stop().css("background","");


        $(".continent-list.clear").children().eq($(this).index()).stop().css("background","url(../images/lifestyle/"+$(".continent-list.clear").children().eq($(this).index()).prop("class")+".png) 0 10px no-repeat");

        if($(this).index() == 1 || $(this).index() == 2 || $(this).index() == 3){
            $(".continent-list.clear").children().eq($(this).index()).stop().css("background-position","43px 10px");
        }
        if($(this).index() == 4){
            $(".continent-list.clear").children().eq($(this).index()).stop().css("background-position","45px 12px");
        }
    });

});