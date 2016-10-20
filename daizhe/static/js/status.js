$(function(){
    /*table 切换部分*/
    //alert(1);
    $('#article-nav1').addClass('add-content-article').siblings().removeClass('add-content-article');
    $("#article-nav1").click(function(){
        $('#article-nav1').addClass('add-content-article').siblings().removeClass('add-content-article');
        $("#see-info-change").css("display","none");
        $("#see-info-article").css("display","block");

        //$(".status-tab").hide().eq($(this).index()).show();
        //$(".all-status>a").removeClass("cur").eq($(this).index()).addClass("cur");
    });
    $("#article-nav2").click(function(){
        $('#article-nav2').addClass('add-content-article').siblings().removeClass('add-content-article');
        $("#see-info-change").css("display","block");
        $("#see-info-article").css("display","none");

        //$(".status-tab").hide().eq($(this).index()).show();
        //$(".all-status>a").removeClass("cur").eq($(this).index()).addClass("cur");
    });



    /*爱心*/
    $(".info-zx p:nth-child(3) span:nth-child(1)").click(function(){
        var att = $(this).hasClass("span-nth-child2");
        if(att){
            $(this).removeClass("span-nth-child2");
        }
        else{
            $(this).addClass("span-nth-child2");
        }
    });

    /*关注*/
    $(".attention").click(function(){
       // alert(123);
        var attention = $(this).find(".attention-i").html();
        if(attention==""){
            $(this).find(".attention-i").html("已");
        }
        else{
            $(this).find(".attention-i").html("");
        }
    });





});





/*懒加载*/
$(function(){
    var n=3;
    $(document).scroll(function(){
        var thisCommentlist=".comment-list .article-list:nth-child("+n+")";
        var commentlist=$(".comment-list .article-list");
        //alert(commentlist.length);
        var commentOnList=document.querySelector(thisCommentlist);
        //alert(commentList.innerHTML);
        var clientRect = commentOnList.getBoundingClientRect();
        //console.log(clientRect);
        /*console.log(clientRect.top);
         console.log(window.innerHeight);*/
        if(clientRect.top>0 && clientRect.top<=window.innerHeight){
            $(".comment-list .article-list").eq(n+1).fadeIn(1000);
            $(".comment-list .article-list").eq(n+2).fadeIn(1000);
            n=n+2;
            if(n>commentlist.length){n=commentlist.length}
        }
    })
});