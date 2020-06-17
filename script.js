// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function isInt(length)
{
    console.log(length % 1)
    console.log(length % 1 === 0);
    return length % 1 === 0;
}


function generatePassword(){

  

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = upperCase.toLowerCase();
  var special = "!@#$%^&*+~";
  var nums = "0123456789";

// While loop woll iterate until user enters valid whole number between 8 and 128, inclusive
  var entry = false;
  while(entry === false){
  var passLength= Number(prompt("How many characters would you like in your password? (Must be whole number between 8 and 128 characters, inclusive)"));
      if(passLength >= 8 && passLength<=128 && isInt(passLength)){
          entry = true ;
      }
      else{entry = false}
  }

  // Asks user if they want each char type. Stores as true bool if they select ok.
  var wantLower = confirm("Would you like to include lower case letters in your password?");
  var wantUpper = confirm("Would you like to include upper case letters in your password?");
  var wantNums = confirm("Would you like to include numbers in your password?");
  var wantSpecial = confirm("Would you like to include special characters in your password?");
  
  var count = 0;
  var password = "";
  var index;

  //The conditionals below ensures that at least one of each char type the user specified 
  //is included in the password
  if(wantUpper=== true){
      
    password=addLetter(upperCase)
    count++;

    }

  if(wantLower=== true){
    password = addLetter(lowerCase)
    count++;
    }

  if(wantSpecial=== true){
    password=addLetter(special)
    count++;
      
    
    }

  if(wantNums=== true){
    password=addLetter(nums)
    count++;
    
    }

// While loop that continues to count length of password. Breaks at password length 
  while (count < passLength){
    

    randChar = Math.floor(Math.random()*4)
    console.log(randChar);

    if(wantUpper=== true && randChar===0){
      
      password=addLetter(upperCase)
      count++;

      }

    if(wantLower=== true && randChar===1){
      password = addLetter(lowerCase)
      count++;
      }

    if(wantSpecial=== true && randChar===2){
      password=addLetter(special)
      count++;
      
      }

    if(wantNums=== true && randChar===3){
      password=addLetter(nums)
      count++;
      
      }
  }

  

  return password;

// Helper function that can access outer scope variables. Minimizes redundant code
      function addLetter(val){
        index = Math.floor(Math.random()*val.length);
        return (password + val[index]);
        



      }



}



