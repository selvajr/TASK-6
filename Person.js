class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old and I'm from ${this.country}.`);
    }
}

const john = new Person('Selva', 24, 'India');
john.introduce();