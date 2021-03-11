"use strict"

let resultBtn = document.querySelector("#result");
let outputElement = document.querySelector("#output");
let baseElement = document.querySelector("#base");
let exponentElement = document.querySelector("#exponent");
let modulusElement = document.querySelector("#modulus");



resultBtn.addEventListener("click", outputHandler);


function outputHandler(event) {
  event.preventDefault();
  let base = BigInt(Number(baseElement.value));
  let exponent = BigInt(Number(exponentElement.value));
  let modulus = BigInt(Number(modulusElement.value));

  outputElement.value = fastExp(base, exponent, modulus);
}


function fastExp(base, exponent, modulus) {
  let exponentBinaryString = exponentToBinary(exponent);
  let currentStepNumber = base; 
  let outputString = "";
  
  for (let i = 1; i < exponentBinaryString.length; i++) {
    if (exponentBinaryString[i] == "0") {
      currentStepNumber = stepInCaseOfZero(currentStepNumber, modulus); 
    } else {
      currentStepNumber = stepInCaseOfOne(currentStepNumber, base, modulus);
    }
    console.log(`${exponentBinaryString[i]}\t${currentStepNumber}`);
    outputString += `${exponentBinaryString[i]}\t${currentStepNumber}\n`;
  } 
  console.log(`The Answer is ${currentStepNumber}\n`);
  outputString +=`The Answer is ${currentStepNumber}\n`;
  return outputString; 


  function exponentToBinary(exponent) {
    return exponent.toString(2).toString();
  } 
  function stepInCaseOfZero(number){
    return ((number * number) % modulus);
  }
  function stepInCaseOfOne(number){       
    return (stepInCaseOfZero(number) * base) % modulus; 
  }  
}
