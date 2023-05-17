// Assignment Code
function generatePassword() {
  console.log("Button has been clicked!");

  // 1. Prompt the user for password criteria
  //    a. password length between 8 < 128
  var passwordLength = parseInt(window.prompt("What length do you want your password to be? (Between 8 and 128)"));

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Password length must be between 8 and 128 characters.");
    return;
  }

  //    b. lowercase, uppercase, numeric, special characters
  var lowercase = window.confirm("Do you want lowercase letters in your password?");
  var uppercase = window.confirm("Do you want uppercase letters in your password?");
  var numbers = window.confirm("Do you want numbers in your password?");
  var specialCharacters = window.confirm("Do you want special characters in your password?");

  // 3. generate the password
  var characterSet = "";

  if (lowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers) {
    characterSet += "0123456789";
  }
  if (specialCharacters) {
    characterSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  // 4. display the generated password to the page
  var passwordTextarea = document.getElementById("password");
  passwordTextarea.value = password;

  window.alert("Your password is: " + password);
}

// Add event listener to generate button
var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", generatePassword);