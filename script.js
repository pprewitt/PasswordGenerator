//Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//define writePassword
function writePassword() {
  //prompts for character selections
  var confirmLength = prompt("How many characters would you like for your password? (8-128 characters)");
  var confirmLowercase = confirm("Would you like to include lower case letters?");
  var confirmSymbols = confirm("Would you like to include symbols?");
  var confirmNumbers = confirm("Would you like to include numbers?");
  var confirmUppercase = confirm("Would you like to include upper case letters?");

 //define length value 
  var lengthValue = parseInt(confirmLength);
  
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
    return String.fromCharCode(Math.floor(Math.random()*15) + 33);

  }
  //rules for writing password function 
  function generatePassword() {
    if (lengthValue >= 8 && lengthValue <= 128) {
      var userEntry = [];
  //pushes symbols
      if (confirmSymbols === true) {
        userEntry.push(getRandomSymbol);
      }
  //pushes uppercase 
      if (confirmUppercase === true) {
        userEntry.push(getRandomUpperCase);
      }
  //pushes numbers
      if (confirmNumbers === true) {
        userEntry.push(getRandomNumber);
      }
 //pushes lowercase
      if (confirmLowercase === true) {
        userEntry.push(getRandomLowerCase);
      }
  // user choices are all false, return instructions to start over
      if (
            
        confirmSymbols === false &&
        confirmUppercase === false &&
        confirmLowercase === false &&
        confirmNumbers === false
      ) {
        alert(
          "You must select at least one character type. Please refresh and select one."
        );
      }
    } else {
      alert("Please choose a password with a length of 8-128. Refresh and try again.");
    }
  //loops to length value  
    var pass = "";
    for (var i = 0; i < lengthValue; i++) {
      var newRandom = Math.floor(Math.random() * userEntry.length);
      pass = pass.concat(userEntry[newRandom]());
    }
    return pass;
    
  }
  //writes password assembly to html password element  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
//copy button function
  function copyButton() {
    document.querySelector("#password").select();
    document.execCommand('copy');
    alert("Copied password to clipboard");
  }
  copyBtn.addEventListener("click", copyButton);