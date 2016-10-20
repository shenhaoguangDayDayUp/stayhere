
/*�ֲ�ͼ*/
window.onload = function(){
    //���ͷ
    var oPrevDiv = document.getElementsByClassName('prev_div')[0];
    //�Ҽ�ͷ
    var oNextDiv = document.getElementsByClassName('next_div')[0];

    var aLi = document.getElementsByClassName('pos-li');
//                        console.log(aLi);
    var arr = [];

    for(var i=0;i<aLi.length;i++){

        var oImg = aLi[i].getElementsByTagName('img')[0];
//                                console.log('-----');
//                                console.log(oImg);
        arr.push( [ parseInt(getStyle(aLi[i],'left')),
                parseInt(getStyle(aLi[i],'top')),
                getStyle(aLi[i],'opacity')*100,
                getStyle(aLi[i],'zIndex'),
                oImg.width]
        );

    }

    //console.dir(arr);

    oPrevDiv.onclick = function(){  //��
        // alert(123);
        arr.push(arr[0]);
        arr.shift();

        for(var i=0;i<aLi.length;i++){

            var oImg = aLi[i].getElementsByTagName('img')[0];

            aLi[i].style.zIndex = arr[i][3];

            startMove(aLi[i],{left : arr[i][0] , top : arr[i][1] , opacity : arr[i][2] });

            startMove( oImg,{ width : arr[i][4] } );

        }

    };

    oNextDiv.onclick = function(){  //��
        arr.unshift(arr[arr.length-1]);
        arr.pop();

        for(var i=0;i<aLi.length;i++){

            var oImg = aLi[i].getElementsByClassName('pos-img')[0];

            aLi[i].style.zIndex = arr[i][3];

            startMove(aLi[i],{left : arr[i][0] , top : arr[i][1] , opacity : arr[i][2] });

            startMove( oImg,{ width : arr[i][4] } );

        }
    };


    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }
        else{
            return getComputedStyle(obj,false)[attr];
        }
    }

    /*table�л�*/
    var lis=document.querySelectorAll("#article-left-table li");

    for(var i=0;i<lis.length;i++){
        var ulTable=document.querySelectorAll("#content-info-table>ul");
        ulTable[i].style.display='none';
        ulTable[0].style.display='block';
        lis[i].index=i;
        lis[i].onclick=function(){
            console.log(this.index);
            var ulTable=document.querySelectorAll("#content-info-table>ul");
            var lis=document.querySelectorAll("#article-left-table li");
            for(var j=0;j<ulTable.length;j++){
                ulTable[j].style.display='none';
            }
            for(var k=0;k<ulTable.length;k++){
                lis[k].firstChild.style.color='#707070';
            }
            ulTable[this.index].style.display='block';
            lis[this.index].firstChild.style.color='cornflowerblue';

        }
    };
    myAnimation();
    document.addEventListener('scroll', function () {
        myAnimation();
    })

};
function myAnimation() {
    var bodyScrollTop = document.body.scrollTop;
    var myoffset = -400;
    var firstOT = document.querySelector("#main-nav-top").offsetTop;

    if (firstOT <= bodyScrollTop + myoffset) {
        //
        document.querySelector("#main-nav-top").classList.add('add-nav-title');
    }else{
        document.querySelector("#main-nav-top").classList.remove('add-nav-title');
    }

}
/*�޷��ֲ�   �����û�*/
$(function () {
    $(".picBox2 li").clone(true).appendTo(".picBox2");
    var myInterval = null;
    var currentTop = 0;

    function rollTwo() {
        myInterval = setInterval(function () {
            currentTop -= (360 / 4000) * 5;
            if (currentTop <= -360) {
                currentTop = 0;
            }
            $(".picBox2").css({marginTop: currentTop + 'px'});
        }, 5);
    }

    rollTwo();
    <!--�������ֹͣ�Ƴ�����-->
    $(".picBox2").hover(function () {
        clearInterval(myInterval);
    }, function () {
        rollTwo();
    });
});


// Ajax获取数据并生成分页导航
pagenav(1);
function pagenav(currentPage){
    $.ajax({
        url: '../api/api_common.php',
        method: 'get',
        data : { fileName: 'share',page: currentPage},
        dataType: "json",
        success: function(data){
            $('#js_showShare').html('');
            $('#pagenav').html('');
            var html = '';
            var totalpages = data[0];
            var result = data[1];
            for(var i in result){
                // var html = html + '<div class="content-show"><div class="show-mb"><a href="http://www.daizhe.cn/experience/'+(1010+i)+'?jingxuan"><span>查看详情</span></a></div><span class="show-img tri-free" style="z-index: 10"></span><img src="../images/experience/experience-'+result[i].image+'"><div class="show-des"><div class="'+result[i].type+'><span class="man">'+result[i].type+'</span><a href="" class="short-des">'+result[i].title+'</a></div><div class=""><p class="short-status"><span class="'+result[i].status+'"></span><span class="appnum"><em>'+result[i].number+'</em>人申请</span></p></div></div></div>';
                var html = html + '<li class="info-content">'+
                                        '<div class="top">'+
                                            '<a class="left">'+
                                                '<img src="../images/headImgs/'+parseInt(Math.random()*7)+'.png"/>'+
                                            '</a>'+
                                            '<div class="right">'+
                                                '<p><a href="http://www.daizhe.cn/share/detail/id/'+(17145+i)+'">'+result[i].sTitle+'</a></p>'+
                                                '<div>'+
                                                    '<a href="http://www.daizhe.cn/user/109464">'+result[i].nickName+'</a>'+
                                                    '<a href="" class="a"></a>'+
                                                    '<span>'+result[i].sDate+'</span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="middle">'+
                                            '<a href=""><img src="../images/share/'+parseInt(Math.random()*5)+'.jpg"/></a>'+
                                            '<a href="http://www.daizhe.cn/share/detail/id/'+(17145+i)+'">'+result[i].sContent+'</a>'+
                                        '</div>'+
                                        '<div class="bottom">'+
                                            '<ul>'+
                                                '<li>'+result[i].scanNum+'</li>'+
                                                '<li>'+result[i].likeNum+'</li>'+
                                                '<li>'+result[i].commNum+'</li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '</li>';
            }
                $('#js_showShare').append(html);
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
