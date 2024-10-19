let displayResult = document.querySelector('.displayResult');

function display(input) {
    displayResult.value += input
}

function clean() {
    displayResult.value = "";
}
 
function del() {
    displayResult.value = displayResult.value.slice(0, -1);
}
// Scientific operations , sin cos ,log ,exp
document.getElementById('sin').addEventListener('click', function() {
    currentInput = Math.sin(parseFloat(displayResult.value));
   displayResult.value = currentInput;
} 
 );
document.getElementById('cos').addEventListener('click', function() {
   currentInput = Math.cos(parseFloat(displayResult.value));
   displayResult.value = currentInput;
} );
document.getElementById('log').addEventListener('click', function() {
    currentInput = Math.log(parseFloat(displayResult.value));
    displayResult.value = currentInput;
 });
 document.getElementById('exp').addEventListener('click', function() {
    currentInput = Math.exp(parseFloat(displayResult.value));
    displayResult.value = currentInput;
 });

/*function calcuate(func){
    const value = parseFloat(displayResult.value);
   
    switch(func){
        case 'sin':
            displayResult.value=Math.sin(value);
            break;
            case 'cos':
                displayResult.value=Math.cos(value);
            break;
            case 'log':
                displayResult.value=Math.log(value);
                break;
                case 'e':
                    displayResult.value=Math.exp(value);
                    break;
                    default:
                   return;
            
    }
    displayResult.value=displayResult.value;
}*/
function calcuateResult(){
  
    displayResult.value = eval(displayResult.value)


}





