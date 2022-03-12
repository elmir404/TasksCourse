$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('#angle-up').fadeIn();
        }
        else{
            $('#angle-up').fadeOut();
        }
     })
     $('#angle-up').click(function(){
        $('html,body').animate({scrollTop:0},700)
        return false;
     });
})