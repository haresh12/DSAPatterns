/*
  Best Time to Buy and Sell Stock.

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5

Input: prices = [7,6,4,3,1]
Output: 0  (Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.)
*/


function bestTimeToByStock(nums){
 let buy = nums[0];
 let profit = 0;
 
 for(let i = 1 ; i < nums.length ; i++){
   if(nums[i] - buy < 0){
     // This means i bought on very high price as i always do so why not buy on this cheap price
     buy = nums[i];
   }else if(nums[i] - buy > profit){
    profit = nums[i] - buy;
   } 
 }
 return profit;
}

console.log(bestTimeToByStock([7,6,4,3,1]))