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

// INPROGRESS
class RandomizedSet {

    constructor(){
      this.map = new Map(); 
      this.list = [];
      this.list.push(null); 
    }  
  
  insert(val){
     if(map.has(val)){
      return false;
     }
     map.set()
     this.list.push(val);
     return true; 
  } 
  
  remove(val){
   if(this.map[val]){
    // let index = 
   } 
  }
  
  }
  
  
  
  