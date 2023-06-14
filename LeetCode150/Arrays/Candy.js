/*
135. Candy

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.


Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.


Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
*/

/*
   https://www.youtube.com/watch?v=h6_lIwZYHQw

   For me this one was hard problem and even the way it got solved in video is not intuitive 
   
   So what basically we are doing is we are first solving for left end side neighbors also
   then we are solving for right and side now once solved for both you will have 2 different 
   array and from those two array at each index take the max.

   TO BE REAL IF I THINK ABOUT THE SOLUTION THEN ACTUALLY IT MAKE SENSE BECAUSE WHEN I WAS TRYING TO SOLVE
   THIS PROBLE BOTH SIDE TOGETHER THEN ONLY ISSUE I HAD IS THING WERE NOT UPDATING CORRECTLY AND WHY BECAUSE
   YOU WERE CHECKING ONLY IMMIDATE LEFT AND RIGHT FOR CURRENT INDEX BUT WHAT IF YOU RIGHT VALUES CHANGE AFTER YOU MOVE 
   FORWARD. AND THAT IS 100% CASE IF YOU START FROM LEFT THEN RIGHT VALUES HAVE CHANCE TO CHANNGE AND IF YOU START FROM
   RIGHT THEN LEFT VALUES MIGHT CHANGE.
*/


function minimumCandy(arr){
  
 let left = Array(arr.length).fill(1);
 
 for(let i = 0 ; i < arr.length ; i++){
   if(i === 0) continue;
   if(arr[i] > arr[i-1]){
    left[i] = Math.max(left[i],left[i-1])+1
   }
 }

 let right = Array(arr.length).fill(1);

 for(let i = arr.length - 1;  i >= 0 ; i--){
    if(i == arr.length -1) continue;
    if(arr[i] > arr[i+1]){
       right[i] = Math.max(right[i],right[i+1]) + 1 
    }
 }

 // AT THIS TIME YOU HAVE BOTH LEFT AND RIGHT NOW TAKE THE MAX FROM EACH INDEX

 let total =0;
 for(let i  = 0 ; i < arr.length ; i++){
    total+=Math.max(left[i],right[i]);
 }
 return total
}

console.log(minimumCandy([1,2,2]))