//Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmLength = prompt(
    "How many characters would you like for your password? (8-128 characters)"
  );
  var confirmLowercase = confirm("Would you like to include lower case letters?");
  var confirmSymbols = confirm("Would you like to include symbols?");
  var confirmNumbers = confirm("Would you like to include numbers?");
  var confirmUppercase = confirm("Would you like to include upper case letters?");

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