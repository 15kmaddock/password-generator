var lChar = "qwertyuiopasdfghjklzxcvbnm";
var uChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
var symbols = "!@#$%^&*-_=+";
var numbers = "1234567890";
var userInput = [];
var random = [];

var generateBtn = document.querySelector("#generate");

function writePassword() {
    
    var length = promt ("Select password length form 8-128 characters.");
    if (length <=7 || length >=129) 
    return length ();
};

var lChar = confirm("would you like to include lowercase characters?");
if (lChar) {
    userInput.push(lChar)
};

var uChar = confirm("Would you like to include uppercae charracters?");
if (uChar) {
    userInput.push(uChar)
};