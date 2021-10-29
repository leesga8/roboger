# _Mr. Roboger_

#### _It's a beautiful day in the neighborhood._

#### By _**Albert Lee**_
## Technologies Used

* _CSS_
* _HTML_
* _Markdown_
* _Git_
* _Jquery_
* _Javascript_

## Description

_When a user enters a number, it will return an array._

## Setup/Installation Requirements

* _Navigate to https://github.com/leesga8/roboger in your browser_
* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Connect to your github repository_
* _open index.html in your browser_
* _Open files in VS Code to edit_

## Known Bugs

_No known issues_

## License

_MIT Copyright (c) 2021, Albert Lee_
https://opensource.org/licenses/MIT

## Contact Information

_Albert Lee leesga8@gmail.com_

## Specs

Takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:_
* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_
* _The number 13 should be replaced with "Won't you be my neighbor?"_
* _The number 21 should be replaced with "Boop"._
* _The number 32 should be replaced with "Won't you be my neighbor?"_

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third.

## TDD

Describe: beepBoop(value)

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should return an array with a range of 0 to 4 if the number 4 is inputted"
Code: beepBoop(4);
Expected Output: 0, 1, 2, 3, 4

Test: "It should find any number that includes the number 1 and replace with 'Beep!'"
Code: beepBoop(11);
Expected Output: 0, 'Beep!, 2, 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!' 

Test: "It should return 'Boop' for the number 2"
Code: beepBoop(2);
Expected Output: 0, 'Beep!', 'Boop!'

Test: "It should find any number that includes the number 2 and replace with 'Boop!'"
Code: beepBoop(12);
Expected Output: 0, 'Beep!, "Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!'

Test: "It should return 'Won't you be my neighbor?' for the number 3"
Code: beepBoop(3);
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?'

Test: "It should find any number that includes the number 3 and replace with 'Won't you be my neighbor?'"
Code: beepBoop(13);
Expected Output: 0, 'Beep!, "Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?'


Test: "It should display 'Please enter a number starting from 0.' if a negative number is entered"
Code: beepBoop(-1);
Expected Output: "Please enter a number starting from 0."