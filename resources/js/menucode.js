$(document).ready(function(){
    $("#menupic").click(function(){
        $("#mainMenu").css("left","0px");
        function showMenunano(){
            $("#mainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
            $("#menupic").animate({right:'-100'},300);
        }
        setTimeout(showMenunano,300);
    });
    $("#close").click(function(){
        $("#mainMenu").css("-webkit-clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
        function hideMenunano(){
             $("#mainMenu").css("left","-300px");
            $("#menupic").animate({right:'50'},300);
        }
        setTimeout(hideMenunano,300);
        
        function originalmenunano(){
            $("#mainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,0% 100%,0% 100%)");
        }
        setTimeout(originalmenunano,600);
    });
});