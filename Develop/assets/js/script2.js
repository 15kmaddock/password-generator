// Assignment code here
var lChar = "qwertyuiopasdfghjklzxcvbnm";
var uChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
var spechar = "!@#$%^&*-_=+";
var numbs = "1234567890";
var userInput = [];
var randomPassword = [];


// Get references to #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #passwrd input
function writePassword() {

var length = prompt("Select password length form 8-128 characters.");
if (length < 7 || length > 129) {
    return
};

var lochar = confirm("would you like to include lowercase characters?");
if (lochar) {
    userInput.push(...lChar)
};

var upChar = confirm("Would you like to include uppercae characters?");
if (upChar) {
    userInput.push(...uChar)
};

var syms = confirm("Would you like to include symbols characters?");
if (syms) {
    userInput.push(...spechar)
};

var numb = confirm("Would you like to include numerical characters?");
if (numb) {
    userInput.push(...numbs)
};

for (var i=0; i<length; i++) {
    randomPassword.push(userInput[Math.floor(Math.random() * userInput.length)])
  }

  var text = document.querySelector("#password");
  text.value = randomPassword.join("");

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
