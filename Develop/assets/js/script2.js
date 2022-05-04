var lChar = "qwertyuiopasdfghjklzxcvbnm";
var uChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
var symbols = "!@#$%^&*-_=+";
var numbers = "1234567890";
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

var lChar = confirm("would you like to include lowercase characters?");
if (lChar) {
    userInput.push(lChar)
};

var uChar = confirm("Would you like to include uppercae characters?");
if (uChar) {
    userInput.push(uChar)
};

var symbols = confirm("Would you like to include uppercase characters?");
if (symbols) {
    userInput.push(symbols)
};

var numbers = confirm("Would you like to include numerical characters?");
if (numbers) {
    userInput.push(numbers)
};

for (var i=0; i<length; i++) {
    randomPassword.push(userInput[Math.floor(Math.random() * userInput.length)])
  }

  var text = document.querySelector("#password");
  text.value = randomPassword.join("");

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
