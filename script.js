// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLength;
var hasLowercase;
var hasUppercase;
var hasNumeric;
var hasSpecial;
// Function to prompt user for password options

function getPasswordOptions() {
  passwordLength = prompt("Enter password length (minimum 10 characters, maximum 64 characters");
  if (isNaN(passwordLength)) {
    alert("please enter a number")
    getPasswordOptions()
  }else if (passwordLength < 10) {
    alert("password must be 10 or more characters")
    getPasswordOptions()

  } else if (passwordLength > 64) {
    alert("password must be less than or equal to 64 characters")
    getPasswordOptions()
  }

  hasLowercase = confirm("password uses lowercase");
  hasUppercase = confirm("password uses uppercase");
  hasNumeric = confirm("password uses numeric");
  hasSpecial = confirm("password uses special")

}










// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}




// Function to generate password with user input
function generatePassword() {
  
 
 
  
 
  
 var passwordCharacters = []
  
 for (let i = 0; i < passwordLength; i++) {
    var randomUppercaseLetter = getRandom(upperCasedCharacters)
    passwordCharacters.push(randomUppercaseLetter)
 }
   var passwordString = passwordCharacters.join('')
    return passwordString
}

  
//  for (let i = 0; i < passwordLength; i++) {
 //   var passwordString = passwordCharacters.join('')
 //  return passwordString



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input



function writePassword() {
getPasswordOptions()
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);