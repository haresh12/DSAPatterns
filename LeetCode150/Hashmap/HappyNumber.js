/*
202. Happy Number

Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

// I DON'T KNOW HOW BUT DONE IN 4 MINUTE AND GOT ALL TEST CASES PASSED IN FIRST GO GOOD SATURDAY
function isHappyNumber(number){
 
  let map = {};
  
  while(number !== 1){
    if(number in map) return false
     map[number] = true;
    let newNumber = getSquereNumber(number);
    number = newNumber;
  }
  return true;
}

function getSquereNumber(number){
  let newNumber = 0;
  while(number !== 0){
    let modulo = number%10;
    newNumber+=(modulo*modulo);
    number = Math.floor(number/10)
  }  
  return newNumber;
}

console.log(isHappyNumber(2))