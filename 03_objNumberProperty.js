/*
    3. Write a program that takes an object as input and returns the number of properties it has
*/

const student = {

    'name' : 'meenal',
    'age' : 25,
    'grade' : 'B+', 
}

function countProperties(obj) {
    
    let count = 0;
    for (const key in obj) {
        count++;
    }
    return count;
}

console.log(countProperties(student));