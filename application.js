function processForm (){
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var output = document.getElementById("output")
    
        for(var j = 1; j <= number2.value; j++){
            for(var i = 1; i <= number1.value; i++){
        
        output.innerHTML += i + " ";
            
                
            }
    
    output.innerHTML +=  "</div>";

        
    }

}