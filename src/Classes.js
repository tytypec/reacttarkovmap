
class Vehicle {

    //instance variable declaration
    odometer = 0;

    constructor(startingMiles) {
        this.odometer = startingMiles;
    }


    //drive is an instance method(function)
    drive(miles){
        //Whenever you reference an instance variable 
        //inside of  a class access it using keyword This
        this.odometer = this.odometer + miles;
    }
}


// console.log(Vehicle);
// var bmw = Vehicle;
// console.log("below Vehicle",bmw);


// var bmw = new Vehicle(1000);
// console.log(bmw.odometer);

// bmw.drive(100);
// console.log("below new Vehicle()",bmw);
// console.log(bmw.odometer);

// var mazda = new Vehicle();
// mazda.drive(900);
// mazda.drive(500);
// console.log(mazda.odometer);

// Vehicle.drive(650); // you cannot call an instance method on class
// console.log(Vehicle.odometer);

class Map {
    constructor(){
        var poop = 0;
    }

    loadImage(){

    }
}

var customs = new Map();
console.log(customs);
