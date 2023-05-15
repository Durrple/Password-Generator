// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("Button has been clicked!");

// 1. Prompt the user for password criteria
//    a. password length between 8 < 128
//    b. lowercase, uppercase, numeric, special characters
// 2. validate the input
// 3. generate the password


// 4. display the generated password to the page
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
