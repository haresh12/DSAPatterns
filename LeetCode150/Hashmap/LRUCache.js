/*

146. LRU Cache
  
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
*/

/*
  Most of the videos you will see are going to user Doubly linked list but good thing
  is that we can do it will amp also BECAUSE MAP PRESERVE THE KEYS ORDER IN WHICH THE
  ARE ENTERD
*/

/// this is one of the most importent question in linked list till now
class LRUCache {
  
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map(); // don't use object use map insted as it stores the value  
    }


    get(key){
       if(!this.map.has(key)) return -1;
       
       // agar key he to ?
       let val = this.map.get(key);
       this.map.delete(key);  // ONLY UNDERSTAND THIS YOU WILL BE DONE WITH THIS QUESTION
       this.map.set(key,val)

       return val;
    }


    put(key,val){   
        if(this.map.has(key)){
            // so delete it first and then add it so vo map me last me  jayegi
         this.map.delete(key);
        }

        this.map.set(key,val);

        // LAST THING WE NEED TO CHECK IS CAPACITY
        // agar last vali value dalne se cap bad gyi to remove first vala
        if(this.map.size > this.capacity){
            this.map.delete(this.map.keys().next().value)
        }
    }
}
