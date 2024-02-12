/*    
    2. Define an object that represents a student's information including name, age, and grade, 
    Implement a method to update the student's grade
*/

//student object
const student = {

    'name' : 'meenal',
    'age' : 25,
    'grade' : 'B+', 
}

//update Student Grade
function updateGrade(x,stuObj) {
    
    stuObj.grade = x;   
}

updateGrade('A',student);
console.log(student);