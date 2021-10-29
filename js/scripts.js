// Business Logic

//return array with range of 0 to number 
//replace 1 with "Beep!"
//replace all numbers that include number 1 with "Beep!"
//...

function beepBoop(number) {
  let array = []
  if (number < 0) {
    array.push("Please enter a number starting from 0.")
  }
  for (i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      array.push(" Won\'t you be my neighbor?")
    } else if (i.toString().includes("2")) {
      array.push(" Boop!")
    } else if (
      i.toString().includes("1")) {
      array.push(" Beep!")
    } else {
      array.push(" " + i)
    }
  }
  return array;
}
// UI Logic

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const number = beepBoop(parseInt($("#numb").val()));
    document.getElementById("result").innerHTML = number
  });
});
