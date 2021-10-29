# _Mr. Roboger_

#### _It's a lovely day in the neighborhood._

#### By _**Albert Lee**_
## Technologies Used

* _CSS_
* _HTML_
* _Markdown_
* _Git_
* _Jquery_
* _Javascript_

## Description

_{When a user enters a number, it will return an array.}_

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

_{MIT Copyright (c) 2021, Albert Lee}_
https://opensource.org/licenses/MIT
## Contact Information

_{Albert Lee leesga8@gmail.com}_

## Specs

Takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:_
* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_
These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third.

## TDD

Describe: beepBoop(value)

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should return an array with a 0, "Beep!" if the number 1 is inputted"