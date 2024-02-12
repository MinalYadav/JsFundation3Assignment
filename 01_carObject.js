/*
  1. Create an object representing a car with properties like "make, medel and year."
   Write a function to display all the properties of the car.
*/

const cars = {

    'make' : 'Toyota',
    'medel' : 'Camry',
    'year' : 2022,
}

function displyCarProp(car) {
    
    for (const i in car) {
        console.log(`${i} : ${car[i]}`);
    }
}

displyCarProp(cars);