// Assignment Code
var generateBtn = document.querySelector("#generate");

var bigletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var smallletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialchars = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "(", ")", ":", ";", "<", ">"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var minimumChoice = 8;
var passbox = [];
var givenpass = "";





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {
  getPrompts()
  var givenpass = "";
  // var myChoice = window.prompt("Choose how many characters do you want your password between 8 and 128 ");
  for (var i = 0; i < minimumChoice; i++) {
    var randomletter = Math.floor(Math.random() * passbox.length)
    givenpass = givenpass + passbox[randomletter];
  }
  return givenpass;
}

function getPrompts() {

  passbox = [];

  minimumChoice = parseInt(prompt("Choose how many characters do you want your password between 8 and 128 "));

  if(isNaN(minimumChoice) || minimumChoice < 8 || minimumChoice > 128) {
  alert("Need to type actual number not the word.");
  return false;
}

if (confirm("Would you like to include uppercase letters?")) {
  passbox = passbox.concat(bigletters);
}

if (confirm("Would you like to include lowercase letters?")) {
  passbox = passbox.concat(smallletters);

}

if (confirm("Would you like numbers in your password?")) {
  passbox = passbox.concat(specialchars);

}

if (confirm("Would you like to include special characters in your password?")) {
  passbox = passbox.concat(numbers);
}
  return true;


} 