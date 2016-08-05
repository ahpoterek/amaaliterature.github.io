function handleClick()
      {         
var amountCorrect = 0;          
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('question_'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "right" && radio.checked) {
      amountCorrect++;
    }
  }
}                   
        alert("Correct Responses: " + amountCorrect);
      }
