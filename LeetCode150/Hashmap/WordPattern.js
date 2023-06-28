/*
  290. Word Pattern

Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
*/


function wordPattern(s, t) {
    const sa = s.split("");
    const ta = t.split(" ");
  
    if (sa.length !== ta.length) return false;
  
    const sMap = new Map();
    const tMap = new Map();
  
    for (let i = 0; i < sa.length; i++) {
      const ch1 = sa[i];
      const word1 = ta[i];
  
      if (sMap.has(ch1)) {
        if (sMap.get(ch1) !== word1) return false;
      } else {
        if (tMap.has(word1)) {
          return false;
        } else {
          sMap.set(ch1, word1);
          tMap.set(word1, true);
        }
      }
    }
  
    return true;
  }
  
  console.log(wordPattern("abba", "dog constructor constructor dog")); // This will pass
  console.log(wordPattern("abba", "dog cat cat dog")); // This will also pass
  
