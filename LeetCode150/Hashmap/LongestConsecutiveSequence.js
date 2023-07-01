/*
  128. Longest Consecutive Sequence
  Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

  You must write an algorithm that runs in O(n) time.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

// EVERY THING WAS FINE IN 20 MINUTE BUT NOW I HAVE TLE ERROR
// function longestSequence(nums){
// let map = {};
// let min = Number.MAX_SAFE_INTEGER;
// let max = Number.MIN_SAFE_INTEGER;

// for(let i = 0 ; i < nums.length ; i++){
//   if(nums[i] < min){
//     min = nums[i];
//   }
//   if(nums[i] > max){
//     max = nums[i];
//   }
//   map[nums[i]] = i;  
// }

// let overAllLongest = 0;
// let currentLongest = 0
// for(let i = min ; i <= max ; i++){
//   if(i in map){
//     currentLongest+=1;
//   }else{
//     if(currentLongest >= overAllLongest){ // ALSO UNDERSTAND HOW IMPORT >= CONDITION IS RATHER THEN ONLY > SMALL THINGS BIG ISSUES
//         overAllLongest = currentLongest;
//     }
//     currentLongest = 0;  // WHENEVER YOU DO NEXT TIME THING ABOUT IT WHY WE HAVE'T PUT THIS CODE INSIDE IF CONDITION OF ELSE
//   }  
// }
// return overAllLongest > currentLongest ? overAllLongest : currentLongest;
// }

// OK I FAILD IN ABOVE SOLUTION SEE IT WAS WORKING FINE BUT IN SOME CASES IT WAS GIVING TLE SO LETS 
// FOCUS ON BELOW SOLUTION

/*
   The solution with set is incredible and one think i learned here is that when you solving any map releated 
   problems don't only think about map but consider set also

   Now see in set solution what we are doing is first storing all values in set so that don't have any 
   duplicated value AND THATS THE FIRST STEP WHICH MAKE SENSE.

   So if we have arr = [6,3,1,5,2,4,6] then is set we will have {6,3,1,5,2,4};

   The first step is basic but no the real magic will happen so we need to go through each set value 
   and then for that value we need to to check if currentSetValue - 1 is in set if it is then we don't need
   to do  anything because that that -1 value come in near future loop and from there only we will start
   longest squeunce.

   Third step is simple if currentSetValue - 1 if it is not in the map means this is where we can start to see
   if this value is possibolity to create longest index and we do that bu checking if set have value currentSetValue+1
   and until it goes true will keep increment current value.

   Overall this is really understandable problem and we will get more idea when will see the code
*/

// THIS PROBLEM IN IMPORTENT UNDERSTAND IT WELL AND MAKE SURE YOU THINK ABOUT SET ALSO WHEN SOLVING PROBLEM 
// 1 HOUR ONE QUESTION
function longestSequence(nums){
  if(nums.length === 0) return 0  
  let set = new Set(nums);
  let longest = Number.MIN_SAFE_INTEGER;
  // This loop also i am using first time
  for(let num of set){
    if(!set.has(num - 1)){
      // Means this is where we can start to see if this is longest sequence
      let currentNumber = num;
      let currentLongest = 1;
      // Now suppose current number is 5 then we need to check if we have 6 in set if yes then currentLongest++;
      // then for 7 then 8 then 9 in short currentLongest+1 until and unless we have that we can keep adding into
      // longest number
       while(set.has(currentNumber + 1)){
        currentNumber++;
        currentLongest++;
       }

       longest = Math.max(currentLongest,longest)
    }
  }
  return longest
}
  
console.log(longestSequence([100,4,200,1,3,2]))