class Uber {
    static BaseFare = 100;
    static CostPerKilometer = 20;
    static CostPerMinute = 50;
    static BookingFee = 15;

    constructor(time = 1, km = 1) {
        this.time = time;
        this.mile = mile;
    }

    totalPrice(time = this.time, km = this.mile) {
        const total = Uber.BaseFare + Uber.BookingFee + (Uber.CostPerMinute * time) + (Uber.CostPerKilometer * km);
        console.log(`The total price is Rs${total} only`);
    }
}

const bike = new Uber();
bike.totalPrice(15, 10); 
bike.totalPrice(10, 10);
