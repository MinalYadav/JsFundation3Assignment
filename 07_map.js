/*
    7. Build a program that utilizes a Map to store user information
    (name, age, email and allows adding updating, and deleting user records.
*/

const user = new Map();

//adding
user.set('name','meenal')
       .set('age',25)
       .set('email','meenalyadav@gmail.com');

// console.log(user);

//updating

user.set('email','abc@gmail.com');
console.log(user);

// deleting 1 record

user.delete('email');
console.log(user);


// deleting user record

user.clear();
console.log(user);

