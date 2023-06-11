/*
   Best Time to Buy and Sell Stock II

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
*/


/*
    This is not that easy e have to go with the recursive solution
    MAKE SURE WE HAVE'T DONE DP YET AND WITHOUT IT IT WILL GIVE TLE ERROR IN LEET CODE
    DRY RUN NOT DONE YET
*/
function bestTimeToByStockII(nums,index,shouldBuy){
   if(index === nums.length) return 0;
   
   // See if you already bought then you must need to sell before buying again
   let profit = 0;
   if(shouldBuy){
    // Now understand that whenever you are buying means you are spending money and you need to make sure you spend
    // as much as less you can BUT UNDERSTAND EACH BUYING MEANS LESS PROFIT

    // So for each index her you have two option either buy it or skip it and if you buy it then profit will be
    // minus and if you skip it then no effect on profit
    let buyKroBhai = -nums[index] + bestTimeToByStockII(nums,index+1,false);
    let skipKroBhai = 0 + bestTimeToByStockII(nums,index+1,true);
    profit = Math.max(buyKroBhai,skipKroBhai);
   }else{
    let sellKroBhai = nums[index] + bestTimeToByStockII(nums,index+1,true);
    let skipKroBhai = 0 + bestTimeToByStockII(nums,index+1,false);
    profit = Math.max(sellKroBhai,skipKroBhai);

   }
   return 
}

console.log(bestTimeToByStockII([1,2,3,4,5],0,true,))