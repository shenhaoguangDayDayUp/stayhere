/*
$(function(){
    var winPos = $(window).scrollTop();
    if(winPos>50){
        console.log(123);
    }

    console.log('-----');

});
*/
/*控制 第二导航栏的显隐*/
window.addEventListener('load', function () {
    myAnimation();
    document.addEventListener('scroll', function () {
        myAnimation();
    })

});

function myAnimation() {
    var bodyScrollTop = document.body.scrollTop;
    var myoffset = 100;
    var firstOT = document.querySelector("#main-nav").offsetTop;

    if (firstOT <= bodyScrollTop + myoffset) {
        //
        document.querySelector("#nav-title").classList.add('add-nav-title');
    }else{
        document.querySelector("#nav-title").classList.remove('add-nav-title');
    }

}

/*控制第二导航栏的背景颜色*/
$(function(){
    $('#nav-title div a:nth-child(1)').css("backgroundColor","#50c8d7");
    $('#nav-title div a').click(function(){
        $(this).css("backgroundColor","#50c8d7").siblings().css("backgroundColor","#2F2F2F");
    });
});


// Ajax获取数据并生成分页导航
pagenav(1);
function pagenav(currentPage){
    $.ajax({
        url: '../api/api_common.php',
        method: 'get',
        data : { fileName: 'experience',page: currentPage},
        dataType: "json",
        success: function(data){
            $('#showExp').html('');
            $('#pagenav').html('');
            var html = '';
            var totalpages = data[0];
            var result = data[1];
            for(var i in result){
                // var html = html + '<div class="content-show"><div class="show-mb"><a href="http://www.daizhe.cn/experience/'+(1010+i)+'?jingxuan"><span>查看详情</span></a></div><span class="show-img tri-free" style="z-index: 10"></span><img src="../images/experience/experience-'+result[i].image+'"><div class="show-des"><div class="'+result[i].type+'><span class="man">'+result[i].type+'</span><a href="" class="short-des">'+result[i].title+'</a></div><div class=""><p class="short-status"><span class="'+result[i].status+'"></span><span class="appnum"><em>'+result[i].number+'</em>人申请</span></p></div></div></div>';
                var html = html + '<div class="content-show">'+
                                        '<div class="show-mb">'+
                                            '<a href="http://www.daizhe.cn/experience/1010?jingxuan">'+
                                                '<span>查看详情</span>'+
                                            '</a>'+
                                        '</div>'+
                                        '<span class="show-img '+result[i].type+'" style="z-index: 10"></span>'+
                                        '<img src="../images/experience/experience-'+result[i].image+'">'+
                                        '<div class="show-des">'+
                                            '<div class="des-fire">'+
                                                '<span class="man">'+result[i].style+'</span>'+
                                                '<a href="http://www.daizhe.cn/experience/'+(1010+i)+'?jingxuan" class="short-des">'+result[i].title+'</a>'+

                                            '</div>'+
                                            '<div class="">'+
                                                '<p class="short-status"><span>'+result[i].status+'</span><span class="appnum"><em>'+result[i].number+'</em>人申请</span></p>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';
            }
                $('#showExp').append(html);
            page({
                id : 'pagenav',
                nowNum : currentPage,
                allNum : totalpages,
                className: 'on'
            });
            $('#pagenav a').click(function(){
                var currentPage = parseInt($(this).attr('href').substring(1));
                pagenav(currentPage);
                // 回到顶部
                $('html,body').stop().animate({
                    scrollTop:400
                },800);
            });
        }
    });
}