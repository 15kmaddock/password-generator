// Assignment code here
var lChar = "qwertyuiopasdfghjkklzxcvbnm";
var uChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
var symbols = "!@#$%^&*_-+=";
var numbers = "1234567890";

// length paramaters for 
function generatePassword() {
  console.log("clicky")
  var length = prompt ("Select password length from 8-128 characters.");
  if (length <=7 ) {
    alert ("password length not sufficient");
    return length();
  }if (length >=129) {
    alert("password length too long");
    return length();
  };

  var lChar = confirm("Would you like to include lowercase characters?")
  if (lChar) {
    push(...lChar)
  
  };
    
  var uChar = confirm("would you like to include upercase characters?")
  if (uChar) {
    push(...uChar)
  }
  


  //promt password citeria
  //1 length
  //2 lcase ucase # special characters
  //validate input
  //generate password based on criteria





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
