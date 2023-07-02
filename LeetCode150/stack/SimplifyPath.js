/*
  71. Simplify Path

  Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a 
  Unix-style file system,convert it to the simplified canonical path.

EX:1
Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

EX:2
Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

EX:3
Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
*/

// Not done by self bit confusing https://www.youtube.com/watch?v=qYlHrAKJfyA (THIS IS COMPLICATED HERE ALSO NOT INTUATIVE)
// function simplifyPath(path){

//   let stack = [];
//   for(let i = 0 ; i < path.length ; i++){
//     let ch = path[i];
//     if(ch !== '.' && !(ch === '/' && stack[stack.length-1] === '/')) {
//        stack.push(ch)  
//     }
//   }
//   if(stack.length  > 1 && stack[stack.length -1] === '/') stack.pop()  
 
//    let newPath = "";
//    for(let i = stack.length - 1; i >= 0 ; i--){
//       if(stack[i] === '/') break
//       newPath+=stack[i]
//    }
//    return `/${newPath.split('').reverse().join('')}`
//  }

// UNDERSTOOD ONLY AFTER LOOKING INTO SOLUTION
function simplifyPath(path) {
 // I WAS NOT AWARE ABOUT SPLIT METHOD ITS INCREDIBLE IN THIS CASE 
 let paths = path.split('/');

 paths = paths.filter(path => path !== ''); // split has convert all / into '' and with filter we are removing it

 let stack = [];
 for(let i = 0 ; i < paths.length ; i++){
   
  if(paths[i] === '..'){
    stack.pop();
  }else if(paths[i] === '.'){
    continue;
  }else{
    stack.push(paths[i])
  }
 }
 return `/${stack.join('/')}`   
};
console.log(simplifyPath('/home//foo/'))