/*
    4. Develop a program that accepts an object and a property name, and checks if the object has the specified property.
*/


const student = {

    'name' : 'meenal',
    'age' : 25,
    'grade' : 'B+', 
}

function hasProperty(prop,obj) {
   const bool = obj.hasOwnProperty(prop);
   if (bool) {
    console.log(`Student object has the ${prop} property`);
   }
   else{
    console.log(`Student object does not have the ${prop} property`);
   }
}

hasProperty('age',student);