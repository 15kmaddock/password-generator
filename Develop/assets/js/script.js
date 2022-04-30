// Assignment code here
var lChar = "qwertyuiopasdfghjkklzxcvbnm";
var uChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
var symbols = "!@#$%^&*_-+=";
var numbers = "1234567890";
var userInput = [];
var random = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// length paramaters for 
function writePassword() {
  
  var length = prompt ("Select password length from 8-128 characters.");
  if (length <=7 ) {
    alert ("password length not sufficient");
    return length();
  }if (length >=129) {
    alert("password length too long");
    return length();
  };

  var lChar = window.confirm("Would you like to include lowercase characters?");
  if (lChar) {
    userInput.push(...lChar)
  };
    
  var uChar = window.confirm("would you like to include upercase characters?");
  if (uChar) {
    userInput.push(...uChar)
  };

  var symbols = window.confirm("Would you like to include special characters?");
  if (symbols) {
    userInput.push(...symbols)
  };

  var numbers = window.confirm("would you like to include numbers?");
  if (numbers) {
    userInput.push(...numbers)
  };

  for (var i=0; i<length; i++) {
    randomPass.push(userInput[Math.floor(Math.random() * userInput.length)])
  }
  var text = document.querySelector("click", writePassword)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
