/*
  134. Gas Station

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to 
its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the 
circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
*/

// NOTE : NEED TO DO IT AGAIN THIS IS NOT AT ALL INTUITIVE LEARN MORE ABOUT GREEDY PROBTLEMS 
// function gasStation(gas,cost){
 
//  // lets first find from which index to start 
 
//  let starting = -1;
//  let max = Number.MIN_SAFE_INTEGER;
//  for(let i = 0 ; i < gas.length ; i++){
//     if(gas[i] >= cost[i] && gas[i] > max){
//         starting = i;
//     }
//  }
//  console.log(starting)
// }

// console.log(gasStation([1,2,3,4,5],[3,4,5,1,2]))

// GREEDY SOLUTION (TRY TO FIND MORE UNDERSTANDABLE SOLUTION)

function gasStation(gas,cost){
  let gasTotal = 0;
  let costTotal = 0;
  for(let i = 0 ; i < gas.length;i++){
     gasTotal+=gas[i];
     costTotal+=cost[i]; // because both have same length
  } 

  if(gasTotal < costTotal) return -1;

  let total = 0;
  let  res = 0;
  for(let i = 0 ; i < gas.length ; i++){
    total+= gas[i] - cost[i];

    if(total < 0) {
        total = 0;
        res = i + 1;
    }
  }
  return res
}