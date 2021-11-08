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

//randomize array//
function shuffleArr (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]]
  }
}
shuffleArr(Uc);
shuffleArr(UcLc);
shuffleArr(UcNum);
shuffleArr(UcSc);
shuffleArr(UcLcNum);
shuffleArr(UcLcSc);
shuffleArr(UcNumSc);
shuffleArr(UcLcNumSc);
shuffleArr(Lc);
shuffleArr(LcNum);
shuffleArr(LcSc);
shuffleArr(LcNumSc);
shuffleArr(Num);
shuffleArr(NumSc);
shuffleArr(Sc);

function generatePassword() {
  
  // variables and confirm windows for password requirements//
  var confirmUc = window.confirm("Would you like to include uppercase letters?");
  var confirmLc = window.confirm("Would you like to include lowercase letters?");
  var confirmNum = window.confirm("Would you like to include numbers?");
  var confirmSc = window.confirm("Would you like to include special charanters?");
  var PwLength = window.prompt("Please enter required length of password (at least 8 and no more than 128 characters).");
  var password = "";
  
  //conditional statement based on user response//
  for(var i = 0; i < PwLength; i++) {
    if (confirmUc === true && confirmLc === true && confirmNum === true && confirmSc === true) {
      var character = Math.floor(Math.random() * UcLcNumSc.length);
      password += UcLcNumSc[character];
      console.log(password);
      console.log(UcLcNumSc);
  } else if (confirmUc === true && confirmLc === true && confirmNum === true) {
      var character = Math.floor(Math.random() * UcLcNum.length);
      password += UcLcNum[character];
  } else if (confirmUc === true && confirmLc === true && confirmSc === true) {
      var character = Math.floor(Math.random() * UcLcSc.length);
      password += UcLcSc[character];
  } else if (confirmUc === true && confirmNum === true && confirmSc === true) {
      var character = Math.floor(Math.random() * UcNumSc.length);
      password += UcNumSc[character];
  } else if (confirmLc === true && confirmNum === true && confirmSc === true) {
      var character = Math.floor(Math.random() * LcNumSc.length);
      password += LcNumSc[character];
  } else if (confirmUc === true && confirmLc === true) {
      var character = Math.floor(Math.random() * UcLc.length);
      password += UcLc[character];
  } else if (confirmUc === true && confirmNum === true) {
      var character = Math.floor(Math.random() * UcNum.length);
      password += UcNum[character];
  } else if (confirmUc === true && confirmSc === true) {
      var character = Math.floor(Math.random() * UcSc.length);
      password += UcSc[character];
  } else if (confirmLc === true && confirmSc === true) {
      var character = Math.floor(Math.random() * LcSc.length);
      password += LcSc[character];
  } else if (confirmNum === true && confirmSc === true) {
      var character = Math.floor(Math.random() * NumSc.length);
      password += NumSc[character];
  } else if (confirmUc === true) {
      var character = Math.floor(Math.random() * Uc.length);
      password += Uc[character];
  } else if (confirmLc === true) {
      var character = Math.floor(Math.random() * Lc.length);
      password += Lc[character];
  } else if (confirmNum === true) {
      var character = Math.floor(Math.random() * Num.length);
      password += Num[character];
  } else if (confirmSc === true) {
      var character = Math.floor(Math.random() * Sc.length);
      password += Sc[character];
  }
};
  return password;
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
