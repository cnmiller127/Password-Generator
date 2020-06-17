# 03 JavaScript: Password Generator

## User 

* The user will click on the generate password button. A prompt will then appear requesting information regarding the password
* The prompt will ask how many characters the user wants in their password
* The prompt will only accept integer values between 8-128, inclusive.
* The user can select if they wish to include uppercase, lowercase, numeric, and/or special characters types in the password.
* Once info is selected, password will populate in card.


## Code
* HTML, CSS, Javascript for click events provided by Trilogy
* JS logic was written by me
* Fence post issue was overcome by ensuring each selected char type is included at the beginning of password
* Used boolean variables for each char type. If true, char type is included.
* The remainder of the string is selected by random generators
* A simple counter variable was used to keep track of the current length of the string 
* While loop was used to iterate until length of password string equaled the length the user entered.
* Strings were used to hold each char type (string behaves like array)
* The random and floor math functions were used to choose a random index of these strings
* Random char was concatenated onto password string each iteration of loop


© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
