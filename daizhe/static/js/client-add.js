/**
 * Created by asus on 2016/9/26.
 */
window.onload = function(){
    var mobile_container = document.getElementById('mobile-container');
    console.log(mobile_container.style.src);
    var mobile_slide_container = document.getElementById('mobile-slide-container');
    var index = 1;
    var len = 6;
    var animated = false;
    var interval = 1000;
    var timer;

    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 600;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(mobile_slide_container.style.left) + offset;

        var go = function (){
            if ( (speed > 0 && parseInt(mobile_slide_container.style.left) < left) || (speed < 0 && parseInt(mobile_slide_container.style.left) > left)) {
                mobile_slide_container.style.left = parseInt(mobile_slide_container.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                mobile_slide_container.style.left = left + 'px';
                if(left>-200){
                    mobile_slide_container.style.left = -280 * len + 'px';
                }
                if(left<(-280 * len)) {
                    mobile_slide_container.style.left = '-280px';
                }
                animated = false;
            }
        }
        go();
    };

    function play(){
        timer = setInterval(function(){
            if (animated) {
                return;
            }
            if (index == 6) {
                index = 1;
            }
            else {
                index += 1;
            }
            animate(-280);
            //play();
        },1500);
    };
    function stop(){
        clearInterval(timer);
    };


    mobile_container.onmouseover = stop;
    mobile_container.onmouseout = play;
    play();

    var home_button_container = document.getElementById('home-button-container');
    home_button_container.onmouseover = stop;
    home_button_container.onmouseout = play;

    var btn_appstore2 = document.getElementById('btn_appstore2');
    console.log(btn_appstore2.style.left);
    var btn_android2 = document.getElementById('btn_android2');


    function downloadSlide(){
        console.log("aaa");
        function animate(offset){
            console.log("aaa");
            var time = 600;
            var inteval = 10;
            var speed = offset / (time / inteval);
            var left = parseInt(btn_appstore2.style.left);
            var right = parseInt(btn_android2.style.right);

            var timer = setInterval(function(){
                if( btn_appstore2.style.left == "0px" || btn_android2.style.right == "0px"){
                    clearInterval(timer);
                }
                btn_appstore2.style.left = parseInt(btn_appstore2.style.left) - speed + 'px';
                btn_android2.style.right = parseInt(btn_android2.style.right) - speed + 'px';

            }, 10);
        }
        animate(600);
    }


    downloadSlide();

    var code_image = document.getElementById('code-image');
    arr = ['gray','snow'];
    var inde = 0;
    setInterval(function(){
        if(inde==2){
            inde = 0;
        }
        downColor = arr[inde];
        code_image.style.boxShadow= "0 0 30px 10px "+ downColor;
        inde++;

    },1000);
};


