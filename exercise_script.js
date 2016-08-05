function Handleclick()
      {         
var numRight = 0;
var numWrong = 0;   
var wrong=[];      
for(var i = 1; i <= 9; i++) {
  var radios = document.getElementsByName('question_'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "right" && radio.checked) {
      numRight++;
    }
    else if(radio.value=="wrong" && radio.checked){
        numWrong++;
        wrong.push(i)
    }
  }
}      
        var percent= Math.round((numRight/9)*100);
        if((numRight+numWrong)<9){
            window.alert("Please answer every question");
        }
        else if((numRight+numWrong)==9){
            alert("Correct Responses: " + numRight);
            alert("Inorrect Responses: " + numWrong);
            alert("Your answers are "+percent+" % correct");
        for (i=0;i<wrong.length; i++){
            alert("Question "+wrong[i]+" is incorrect");
        }
            
        }
        
        
      }
