// Assignment code here
let lowercase = "qwertyuiopasdfghjkklzxcvbnm";
var upercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var symbols = "!@#$%^&*_-+=";
var numbers = "1234567890";
var userInput = [];
var random = [];

// length paramaters for 
function generatePassword() {
  
  var length = prompt ("Select password length from 8-128 characters.");
  if (length <=7 ) {
    alert ("password length not sufficient");
    return length();
  }if (length >=129) {
    alert("password length too long");
    return length();
  };

  var lChar = window.confirm("Would you like to include lowercase characters?")
  if (lChar) {
    
    userInput.push(...lChar)
  };
    
  var uChar = window.confirm("would you like to include upercase characters?")
  if (uChar) {
    userInput.push(...uChar)
  };

  var symbols = window.confirm("Would you like to include special characters?")
  if (symbols) {
    userInput.push(...symbols)
  };

  var numbers = window.confirm("would you like to include numbers?")
  if (symbols) {
    userInput.push(...symbols)
  };

  for (var i=0; i<length; i++) {
    randomPass.push(userInput[Math.floor(Math.random() * userInput.length)])
  }
  

  // display password to page
  return "generated pass will go here"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
