function calcost (){
    var cost = 0;
    
    var pkg = document.getElementById("plan").value;
    var mem = parseInt(document.getElementById("member").value,10);
    
    var gym = document.getElementById("chkgym").checked;
    var na = document.getElementById("chknc").checked;
    var pa = document.getElementById("chkpa").checked;
    var ca = document.getElementById("chkca").checked;
    
    //cost calculation part
    
    if(pkg == "basic"){
        var price = 1500.00;
        
        cost = price * mem;
        
        //aditional features cost
        
        if(gym){
            cost = cost + (1000 * mem);
        }
        else{
            cost = cost;
        }
        
        if(na){
            cost = cost + (2000 * mem);
        }
        else{
            cost = cost;
        }
        
        if(pa){
            cost = cost + (200 * mem);
        }
        else{
            cost = cost;
        }
        
        if(ca){
            cost = cost + (2500 * mem);
        }
        else{
            cost = cost;
        }
        document.getElementById("bill").innerHTML = "Your one day cost will be Rs."+cost;
    }
    
    else if(pkg == "pro"){
        var price = 2500.00;
        
        cost = price * mem;
        
        //aditional features cost
        
        if(gym){
            cost = cost + (1200 * mem);
        }
        else{
            cost = cost;
        }
        
        if(na){
            cost = cost + (2200 * mem);
        }
        else{
            cost = cost;
        }
        
        if(pa){
            cost = cost + (250 * mem);
        }
        else{
            cost = cost;
        }
        
        if(ca){
            cost = cost + (3000 * mem);
        }
        else{
            cost = cost;
        }
        document.getElementById("bill").innerHTML = "Your one day cost will be Rs."+cost;
    }
    
    else if(pkg == "premium"){
        var price = 3000.00;
        
        cost = price * mem;
        
        //aditional features cost
        
        if(gym){
            cost = cost + (1500 * mem);
        }
        else{
            cost = cost;
        }
        
        if(na){
            cost = cost + (2500 * mem);
        }
        else{
            cost = cost;
        }
        
        if(pa){
            cost = cost + (350 * mem);
        }
        else{
            cost = cost;
        }
        
        if(ca){
            cost = cost + (3500 * mem);
        }
        else{
            cost = cost;
        }
        document.getElementById("bill").innerHTML = "Your one day cost will be Rs."+cost;
    }
    else{
        document.getElementById("bill").innerHTML = "Please Select Package First";
    }

}