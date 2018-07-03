$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('darkme');
    }
    else{
        $('nav').removeClass('darkme');
    }
})