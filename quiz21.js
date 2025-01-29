
function createPerson(name, age, profession) {
    
    return {
        name: name,
        age: age,
        profession: profession,

  
        introduce: function () {
            return `Hi, my name is ${this.name}. I'm ${this.age} years old and work as a ${this.profession}.`;
        }
    };
}


const person = createPerson("John Doe", 30, "Web Developer");


console.log(person.name);


console.log(person.age);


console.log(person.profession);


console.log(person.introduce());