init()

function init(){
  while(true){
    let result = 0
    alert('choose operation')

    let operation = prompt('1)*, 2)/, 3)+, 4)-');
    let firstNumber = prompt('type ur first number');
    let secondNumber = prompt('type ur second number');
    
    if (operation == 1) result = mult(firstNumber,secondNumber)
    else if (operation == 2) result = del(firstNumber,secondNumber)
    else if (operation == 3) result = summ(firstNumber,secondNumber)
    else if (operation == 4) result = min(firstNumber,secondNumber)
    else alert("???")
    
    alert(result)
    break
  }
}

function mult(a,b){
  return(Number(a) * Number(b))
}
function del(a,b){
  return(Number(a) / Number(b))
}
function summ(a,b){
  return(Number(a) + Number(b))
}
function min(a,b){
  return(Number(a) - Number(b))
}
