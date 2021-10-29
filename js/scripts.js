
// Business Logic


//return array with range of 0 to number 
//replace all numbers that include number 1 with "Beep!"

function beepBoop(number){
  let array = []
  for(i=0;i<=number;i++){
    if(i.toString().includes("2")){
      array.push("Boop!")
    } else if (
      i.toString().includes("1")){
        array.push("Beep!")
    } else {
    array.push(i)
    }
  }

  return array;
}






// UI Logic
