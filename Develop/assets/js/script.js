// Assignment code here
// Array for characters
const lchar = "qwertyuiopasdfghjklzxcvbnm";
const uchar = "QWERTYUIOPASDFGHJKLZXCVBNM";
const symbols = "!@#$%^&*_-+=";
const numbers = "1234567890"

const lowercase = lchar
const uppercase = uchar
const charSymbols = symbols
const charNumbers = numbers

function generatePassword () {
  const length = prompt ('Enter your desired password length of 8 - 128 characters');
  if (length <=7) {
    window.alert ('password length not sufficient');
    return length(); 
  }
}












const password = document.getElementById

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
