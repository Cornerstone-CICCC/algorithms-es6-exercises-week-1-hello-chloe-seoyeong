/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

function laugh (times) {
  let ha = "";
  for (i = 0; i < times; i++) {
    ha += "ha";
  }
  console.log(`${ha}!`);
}

laugh(4);
