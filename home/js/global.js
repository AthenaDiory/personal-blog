$(function(){
    //设置导航栏高亮状态
    $('.header .headerTopNav a').each(function(index){
        var location=this.getAttribute('href');
        if(window.location.href.indexOf(location)!=-1){
            $(this).addClass('on');
        }
    });



    //设置回到顶部
    $(window).scroll(function(){
        if($(window).scrollTop()>400){
            $('.toTop').show().click(function(){
                $('body,html').animate({scrollTop:0},200);
                return false;
            })
        }else{
            $('.toTop').hide();
        }
    })
});