function createPerson(name, age, city) {
    return {
        Name: name,
        age: age,
        city: city
    };
}

let p3 = createPerson("ajay", 21, "Indore");
let p4 = createPerson("ravi", 25, "bhopal");

people.push(p3, p4);

for (let person of people) {
    if (person.age >= 18) {
        console.log(person);
    }
}
