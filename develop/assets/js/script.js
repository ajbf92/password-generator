// Assignment code here
//variation of variables based on user selection//
var Uc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","U","X","W","Y","Z"]
var UcLc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","U","X","W","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var UcNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","U","X","W","Y","Z","1","2","3","4","5","6","7","8","9","0"]
var UcSc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","U","X","W","Y","Z","\"","!","#","$","%","&","\'","(",")","*","+", "\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
var UcLcNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","U","X","W","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"]
var UcLcSc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","U","X","W","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","\"","!","#","$","%","&","\'","(",")","*","+", "\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
var UcNumSc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","U","X","W","Y","Z","1","2","3","4","5","6","7","8","9","0","\"","!","#","$","%","&","\'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
var UcLcNumSc= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","U","X","W","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","\"","!","#","$","%","&","\'","(",")","*","+", "\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
var Lc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var LcNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"]
var LcSc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","\"","!","#","$","%","&","\'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
var LcNumSc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","\"","!","#","$","%","&","\'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
var Num = ["1","2","3","4","5","6","7","8","9","0"]
var NumSc = ["1","2","3","4","5","6","7","8","9","0","\"","!","#","$","%","&","\'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
var Sc = ["\"","!","#","$","%","&","\'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]

function generatePassword() {
  // variales and confirm windows for password requirements//
  var confirmUc = window.confirm("Would you like to include uppercase letters?");
  var confirmLc = window.confirm("Would you like to include lowercase letters?");
  var confirmNum = window.confirm("Would you like to include numbers?");
  var confirmSc = window.confirm("Would you like to include special charanters?");
  var promptPwLength = window.prompt("Please enter required length of password (at least 8 and no more than 128 characters).");
  var PwLength = promptPwLength
  var NewPw;
  //conditional statements based on user response//
  for(var i = 0; i < PwLength; i++) {
    if (confirmUc === true) {
      return character = Math.floor(Math.random() * Uc.length)
      NewPw = NewPW + character
    };
  };
};

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
