/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions (feeling, feelingFunction) {
  console.log(`"I am ${feeling}, ${feelingFunction(2)}!"`)
};

emotions("happy", function laugh(times) {
  let ha = "";
  for (i = 0; i < times; i++) {
    ha += "ha";
  }
  return ha;
})