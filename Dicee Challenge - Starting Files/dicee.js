function rollDice() {
  console.log("Dice rolling");
  var random_number1 = Math.random();
  random_number1 = random_number1 * 6;
  random_number1 = Math.floor(random_number1) + 1;

  var random_number2 = Math.random();
  random_number2 = random_number2 * 6;
  random_number2 = Math.floor(random_number2) + 1;

  var dice_number1 = 'dice' + random_number1;
  var dice_number2 = 'dice' + random_number2;



  var element1 = document.getElementsByTagName("img")[0];
  var element2 = document.getElementsByTagName("img")[1];

  // element1.class("dice1");
  element1.setAttribute("class", dice_number1)
  element2.setAttribute("class", dice_number2)

  console.log(element1);
  console.log(element2);

  if (random_number1 > random_number2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
  }
  else if (random_number1 === random_number2) {
    document.querySelector("h1").innerHTML = "Draw, Roll again 🏴‍☠️";


  }

  else{
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";

  }
}





// dice1.png
//dice2.png
