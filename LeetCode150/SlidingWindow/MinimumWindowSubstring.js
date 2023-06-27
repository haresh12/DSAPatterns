/*
76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

// https://www.youtube.com/watch?v=e1HlptlipB0
// TRIED FOR ONE HOURS NO LUCK PASSED WITH 154 CASES OUT OU 267
// function minimumWindow(s, t) {
//     if (t.length > s.length) return "";
  
//     let tMap = initMap(t);
  
//     let start = 0;
//     let end = 0;
//     let min = Number.MAX_SAFE_INTEGER;
//     let started = false;
//     let ss = "";
  
//     while (end < s.length) {
//       if (s[end] in tMap) {
//         started = true;
//         if (tMap[s[end]] === 1) {
//           delete tMap[s[end]];
//         } else {
//           tMap[s[end]] -= 1;
//         }
  
//         if (Object.keys(tMap).length === 0) {
//           if (min > end - start) {
//             min = end - start;
//             ss = s.substring(start, end + 1);
//           }
//           end++;
//           start = end;
//           started = false;
//           tMap = initMap(t);
//         }
//       } else if (!started) {
//         start++;
//         end++;
//       } else {
//         end++;
//       }
//     }
  
//     return ss;
//   }
  
//   function initMap(t) {
//     let map = {};
//     for (let i = 0; i < t.length; i++) {
//       if (t[i] in map) {
//         map[t[i]] += 1;
//       } else {
//         map[t[i]] = 1;
//       }
//     }
//     return map;
//   }
  
function minimumWindow(s,t){
 if(t.length > s.length) return "";
 let ans = "";
 let tMap = {};

 for(let i = 0 ; i < t.length ; i++){
    if(t[i] in tMap){
        tMap[t[i]]+=1;
    }else{
        tMap[t[i]] = 1;
    }
 }   

 let mct = 0;
 let dmct = t.length;
 let sMap = {};

 let i = -1;
 let j = -1;

 while(true){
    let f1= false;
    let f2 = false;
     // acquire THATS ALL ABOUT ACQUIRE
     while(i < s.length -1 && mct < dmct){
        i++;
        let ch = s[i];
        if(ch in sMap){
            sMap[ch]+=1;
        }else{
            sMap[ch]=1;
        }

        // why equal also because we are checking it after adding
        if(sMap[ch] <= tMap[ch]){
            mct++
        }
        f1=true;
     }

     // Release
     while(j < i && mct === dmct){
        let currAns = s.substring(j+1,i+1);
        if(ans.length === 0 || currAns.length < ans.length){
            ans = currAns;
        }
        j++;

        if(sMap[s[j]] === 1){
            delete sMap[s[j]];
        }else{
            sMap[s[j]]-=1;
        }

        // this means we need suppose 3 x in s string  but now we less then that
        if(sMap[s[i]] < tMap[s[i]]){
           mct--;
        }
        f2 =true;
     }

     if(f1 === false && f2 === false){
        break;
     }
 }
 return ans;
}
console.log(minimumWindow("ADOBECODEBANC","ABC"))