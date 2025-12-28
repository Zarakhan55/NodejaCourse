class Person {
    constructor(name, age, fatherName, id, city) {
        this.name = name;
        this.age = age;
        this.fatherName = fatherName;
        this.id = id;
        this.city = city;   // NEW field
    }

    greet() {
        console.log(`Hello ${this.name}!`);
    }

    getDetails() {  // NEW method
        return `
Name: ${this.name}
Age: ${this.age}
Father Name: ${this.fatherName}
ID: ${this.id}
City: ${this.city}
        `;
    }
}

module.exports = Person;
