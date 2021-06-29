// Handling Input of Operand
const numButtons =document.querySelectorAll(".num-btn");
const value1 = document.querySelector("#val-1");
const value2 = document.querySelector("#val-2");
let activeElementId;

value1.addEventListener(
  "click", function(){
    activeElementId = document.activeElement.id;
  }
);
value2.addEventListener(
  "click", function(){
    activeElementId = document.activeElement.id;
  }
);

for(let i=0; i<numButtons.length; i++){
  numButtons[i].addEventListener("click", function(e)
  {
    buttonText=e.target.innerText;
    if(activeElementId==="val-1")
          value1.value += buttonText;
    else if(activeElementId==="val-2")
          value2.value += buttonText;
        }
 );
}

// Handling input of operator

const opButtons = document.querySelectorAll(".op-btn");
const operators = document.querySelector("#operator");

operators.addEventListener("click", function(){
    activeElementId = document.activeElement.id;
  }
)
for(var i=0; i<opButtons.length; i++){
  opButtons[i].addEventListener("click", function(e){
    operatorText=e.target.innerText;
    if(activeElementId==="operator")
       operators.value = operatorText;
  });
}

// Handling Clear Button
const clear = document.querySelector(".clr-btn").addEventListener("click", function(){
  value1.value ="";
  value2.value ="";
  operators.value ="";
  result.value = "";

})

// Handling Equal Button
const result = document.querySelector("#result");
const equalButton = document.querySelector(".equal-btn").addEventListener("click", function(){
  if(value1.value ==="" || value2.value ==="" || operators.value ==="")
  {
    alert("Empty Inputs are not allowed");
  }
  const num1 = parseInt(value1.value);
  const num2 = parseInt(value2.value);
  switch(operators.value)
  {
    case "+":
      result.value= add(num1, num2);
      break;
    case "-":
      result.value= substract(num1, num2);
      break;
    case "*":
      result.value= multiply(num1, num2);
      break;
    case "/":
      result.value= divide(num1, num2);
      break;
    case "%":
      result.value= modulus(num1, num2);
      break;
  
  }
});

function add(number1, number2){
  return number1+number2;
}

function substract(number1, number2){
  return number1-number2;
}
function multiply(number1, number2){
  return number1*number2;
}

function divide(number1, number2){
  return number1/number2;
}
function modulus(number1, number2){
  return number1%number2;
}
