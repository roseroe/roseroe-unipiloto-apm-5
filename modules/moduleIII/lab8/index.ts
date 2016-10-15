class Vehicle {
    whel: number;
    fuel: string;
    private color: string;

    constructor(wheel: number, fuel: string, color: string='white')
    {
        this.color=color;
        this.fuel=fuel;
        this.whel=wheel;
    }
}

class Car extends Vehicle{
    constructor(){
        super(4,'gas','red');
    }
}

class Motorcycle extends Vehicle{
    constructor(){
        super(2,'gasoline');
    }
}

var car = new Car();
var motorcycle = new Motorcycle();

console.log(car);
console.log(motorcycle);