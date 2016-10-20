/**
 * Created by asus on 2016/9/27.
 */
$(function(){
    $("#imd-onetext").fadeIn(2000);
    $("#easy-travel").fadeIn(4000);
    $("#easy-leisure").fadeIn(4000);
    $("#easy-topic").fadeIn(4000);

})


$(document).ready(function () {
    try {
        $('body').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });
        $('.experience-imd').ripples({
            resolution: 40, //设置每次抖动的频率
            dropRadius: 10, //px 设置抖动的大小
            perturbance: 0.05,
        });
    }
    catch (e) {
        alert("excute catch");
        console.log(e);
    }
    //水波效果插件  end

})