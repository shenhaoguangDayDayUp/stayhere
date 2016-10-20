    //头部导航输入框显示
    var searchInput=$("header .container .login li:nth-child(1) input");
    searchInput.css("margin-left","205px");
    var searchInputBtn=$("header .container .login li:nth-child(1) .btn");
    searchInputBtn.click(function(){
        var searchInputML=searchInput.css("margin-left");
        var searchInputVal=$("header .container .login li:nth-child(1) input").val();
        //alert(searchInputVal);
        if(parseInt(searchInputML)>0){
            searchInput.stop().animate({"margin-left":"0px"},500);
        }else if(searchInputVal==null || searchInputVal.length==0){
            searchInput.stop().animate({"margin-left":"205px"},500);
        }else{
            $("header .container .login li:nth-child(1) form").submit();
        };
    })

// 回到顶部
$('.go-top li:first').click(function(){
        $('html,body').stop().animate({
            scrollTop:0
        },800);
});

//分页导航
function page(opt){

	if(!opt.id){return false};
	
	var obj = document.getElementById(opt.id);
	
	var nowNum = opt.nowNum || 1;
	var allNum = opt.allNum || 9;
	var className = opt.className || 'on';
	
	if( nowNum>=5 && allNum>=10 ){
	
		var oA = document.createElement('a');
		oA.href = '#1';
		oA.innerHTML = '首页';
		obj.appendChild(oA);
	
	}
	
	if(nowNum>=2){
		var oA = document.createElement('a');
		oA.href = '#' + (nowNum - 1);
		oA.innerHTML = '上一页';
		obj.appendChild(oA);
	}
	
	if(allNum<=9){
		for(var i=1;i<=allNum;i++){
			var oA = document.createElement('a');
			oA.href = '#' + i;
			if(nowNum == i){
				oA.innerHTML = i;
				oA.setAttribute('class',className);
			}
			else{
				oA.innerHTML = i;
			}
			obj.appendChild(oA);
		}	
	}
	else{
	
		for(var i=1;i<=9;i++){
			var oA = document.createElement('a');
			if(nowNum <= 4){
				
				oA.href = '#' + i;
				if(nowNum == i){
					oA.innerHTML = i;
					oA.setAttribute('class',className);
				}
				else{
					oA.innerHTML = i;
				}	
			}
			else if( (allNum - nowNum) <= 3 ){//最后四个页码
			
				oA.href = '#' + (allNum - 9 + i);
				if((allNum - nowNum +i )==9 ){
					oA.innerHTML = (allNum - 9 + i);
					oA.setAttribute('class',className);
				}
				else{
					oA.innerHTML = (allNum - 9 + i);
				}
			
			}
			else{
				oA.href = '#' + (nowNum - 5 + i);
				
				if(i==5){
					oA.innerHTML = (nowNum - 5 + i);
					oA.setAttribute('class',className);
				}
				else{
					oA.innerHTML =  (nowNum - 5 + i);
				}
			}
			obj.appendChild(oA);
			
		}
	
	}
	
	if( (allNum - nowNum) >= 1 ){
		var oA = document.createElement('a');
		oA.href = '#' + (nowNum + 1);
		oA.innerHTML = '下一页';
		obj.appendChild(oA);
	}
	
	if( (allNum - nowNum) >= 5 && allNum>=10 ){
	
		var oA = document.createElement('a');
		oA.href = '#' + allNum;
		oA.innerHTML = '尾页';
		obj.appendChild(oA);
	
	}
	
	
	var aA = obj.getElementsByTagName('a');
	
	for(var i=0;i<aA.length;i++){
		aA[i].onclick = function(){
			
			var nowNum = parseInt(this.getAttribute('href').substring(1));
			
			obj.innerHTML = '';
			
			page({
			
				id : opt.id,
				nowNum : nowNum,
				allNum : allNum
			});
			
			return false;
			
		};
	}
}


// 回到顶部
//--------------超过1屏就显示滚动会顶部
    //获取可视窗口的高度
    var viewHeight = $(window).height();
    //获取向上卷的高度$(window).scrollTop()
    $('.go-top').hide();//默认不显示
    $(window).scroll(function(){
        // console.log($(window).scrollTop())
        if($(window).scrollTop()>viewHeight){
            $('.go-top').stop().fadeIn();
        }else{
            $('.go-top').stop().fadeOut();
        }

        //--------滚动监听
        if($(window).scrollTop() >= 800){
            $("#state").stop().slideDown(800);
        }
    });

    //------------点击返回顶部
    $('.go-top li:first').click(function(){
        $('html,body').stop().animate({
            scrollTop:0
        },800);
    });
