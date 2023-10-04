// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = {
  numbers: "0123456789",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!#$%&()*+-/<=>?@^~",
}

var selection = [""];
var myPassword = "";

// Start to make the password
function generatePassword() {
  var passwordLength = prompt ("Select password length between 8 and 128 characters anc click 'OK'");

if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Try again.");
  return;
}

console.log("You entered the password length")

var numbers = confirm ("Click 'OK' to use numbers characters or click 'Cancel' ");
var lowercase = confirm ("Click 'OK' to use lower case characters or click 'Cancel' ");
var uppercase = confirm ("Click 'OK' to use upper case characters or click 'Cancel' ");
var special = confirm ("Click 'OK' to use special charters or click 'Cancel' ");

if (numbers === false && lowercase === false && uppercase === false && special === false) {
  alert("You have to choose one option.");
  return;
}
console.log("You selected the characters to use")

if (numbers == true) {
  for (var i = 0; i <characters.numbers.length; i++) 
    selection.push(characters.numbers[i]);
}

if (lowercase == true) {
  for (var i = 0; i <characters.lowercase.length; i++) 
    selection.push(characters.lowercase[i]);
}

if (uppercase == true) {
  for (var i = 0; i <characters.uppercase.length; i++) 
    selection.push(characters.uppercase[i]);
}

if (special == true) {
  for (var i = 0; i <characters.special.length; i++)
    selection.push(characters.special[i]);
}


  for (var i = 0; i < passwordLength; i++) {
    selection[Math.floor(Math.random() * selection.length)];
    myPassword += selection[Math.floor(Math.random() * selection.length)];
}

console.log("You have your password")

  return myPassword;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





