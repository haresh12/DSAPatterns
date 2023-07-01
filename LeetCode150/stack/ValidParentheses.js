/*
   20. Valid Parentheses
   
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false
*/

// DONE IN 10 MIN FIRST ATTEMT SO GOOD TO GO
function validParentheses(s){

  let stack = [];

  for(let i = 0 ; i < s.length ; i++){
     let ch = s[i];
     if(ch === '(' || ch === '[' || ch === '{'){
        stack.push(ch);
     }else{
        if(stack.length === 0) return false; // this means we have extra closing parentheses (MI BECAUSE WE ALWAYS FORGET THIS PART)
        let top = stack[stack.length-1]; 
        if((top === '(' && ch === ')') ||(top === '[' && ch === ']') || (top === '{' && ch === '}')){
            stack.pop();
        }else{
            return false;
        }
     }
  }
  return stack.length === 0;
}

console.log(validParentheses('()()()()()'))