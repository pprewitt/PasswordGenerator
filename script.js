//Assignment Code
var generateBtn = document.querySelector("#generate");



// get random lower case letter function
function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
  }
  
  //get random upper case letter function
  function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
  }
  
  //get random number function
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
  }
  
  //get random symbol function
  function getRandomSymbol() {
    const symbols = "!#$%&()*+,-./:;<=>?@";
    return symbols [Math.floor(Math.random * symbols.length)];
  
  }



// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);