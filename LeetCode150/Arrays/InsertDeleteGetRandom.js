/*
380. Insert Delete GetRandom O(1)

Implement the RandomizedSet class:
RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

*/

/*
    Great job on this few thing to make sure we understood 
    First why we had to take arr also ? Ans because of random method else in map we had to iterate through map and its o(n)
    Second why we had to swap value with last index ? Again same ans to make it O(1) operation because if you remove value
    from middle of the array then other values has to shift it will be o(n)
*/
class RandomizedSet {

  constructor(){
   this.map = {};
   this.list = []; 
  }
  
  insert(val){
   if(val in this.map){
    return false;
   } 
   this.map[val] = this.list.length;
   this.list.push(val);
   return true;
  }

  remove(val){
   if(val in this.map){
     let indexInArr = this.map[val];
     let lastIndex = this.list.length-1;
     this.swapVal(indexInArr,lastIndex);
     this.map[this.list[indexInArr]] = indexInArr; // THIS IS THE LINE THAT HAS PROBABILITY OF MISTAKES 
     this.list.pop(); // MAKE SURE THIS LINE IS AFTER ABOVE LINE
     delete this.map[val];
   } 
  }

  swapVal(indexInArr,lastIndex){
    console.log(indexInArr,lastIndex)
    let temp = this.list[indexInArr];
    this.list[indexInArr] = this.list[lastIndex];
    this.list[lastIndex] = temp;
  }

   getRandom(){
    /*
    The Math.random() function in JavaScript returns a floating-point number between 0 (inclusive) and 1 (exclusive). 
    It generates a random decimal value greater than or equal to 0 and less than 1.
    UNDERSTAND IT WILL NOT INCLUDE 1 VALUE EVER AND THATS WHY DON'T WORRY ABOUT THIS SCENARIO
    this.list.length * 1 index will be undefined it will never happen.
    */
     let randomIndex =  Math.floor(Math.random()*this.list.length); // because it may return 0 value also in that case we will return 0 index value
     return this.list[randomIndex]
   }
 }


 let sets = new RandomizedSet();
 sets.insert(2);
 sets.insert(3);
 sets.insert(4);
 sets.insert(5);
 sets.insert(6);
 sets.insert(7);
 console.log("asd",sets.getRandom());
 console.log(sets.map)
 console.log(sets.list)


  
  
  
  