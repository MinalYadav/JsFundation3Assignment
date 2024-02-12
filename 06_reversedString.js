/*
   6. create a function that takes a string as input and returns the string reversed using string manipulation techniques
*/

let str1 = "java";

function revString(str) {
    let newstr = new String();
    for (let i = str.length-1 ; i >= 0 ; i--) {
            newstr=newstr+str[i];
    }
    return newstr;
    
}

console.log(revString(str1));
