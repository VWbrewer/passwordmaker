// Assignment Code
var generateBtn = document.querySelector("#generate");


var chars = {
  numbers: "0123456789"
  lowercase = "abcdefghijklmnopqrstuvwxyz";
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  symbols = "!#$%&()*+-/<=>?@^~";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    var passwordLength = 15;
}   
  

    for(var i=0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber);
    }

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





