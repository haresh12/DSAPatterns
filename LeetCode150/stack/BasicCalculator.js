/*
224. Basic Calculator

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/

// DO IT BY SELF WORST VIDEO WASTED 36 MINUTE DON'T WATCH PEPCODING VIDEO FOR THIS
function cal(str){
    let sign = 1;
    let sum = 0;
    let stack = [];

    for(let i = 0 ; i < str.length ; i++){
        let ch = str[i];

        if(Number.isInteger(parseInt(ch))){
          let val = 0;
          while(i < str.length  && Number.isInteger(parseInt(ch))){
            val=val*10 + (parseInt(ch) - '0');
            i++;
          }
          i--;
          val = val*sign;
          sign =1;
          sum+=val;
        }else if(ch === '('){
          stack.push(sum);
          stack.push(sign);
          sum = 0;
          sign+=1;
        }else if(ch === ')'){
          sum *= stack.pop();
          sum += stack.pop();
        }else if(ch === '-'){
           sign *=-1;
        }
    }
    return sum;
}

console.log(cal('(1+(4+5+2)-3)+(6+8)'))