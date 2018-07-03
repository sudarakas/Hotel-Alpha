$(document).ready(function(){
    $(".buttontop").click(function(){
        $path=$("#content").offset().top;
        $('body').animate({scrollTop:$path},1000);
    });
    
    $("#linkbox1").click(function(){
        $path=$("#box1").offset().top;
        $('body').animate({scrollTop:$path},1000);
    });
    
    $("#linkbox2").click(function(){
        $path=$("#box2").offset().top;
        $('body').animate({scrollTop:$path},1000);
    });
    
    $("#linkbox3").click(function(){
        $path=$("#box3").offset().top;
        $('body').animate({scrollTop:$path},1000);
    });
    
    $("#linkbox4").click(function(){
        $path=$("#box4").offset().top;
        $('body').animate({scrollTop:$path},1000);
    });
    
    $("#linkbox5").click(function(){
        $path=$("#box5").offset().top;
        $('body').animate({scrollTop:$path},1000);
    });

});