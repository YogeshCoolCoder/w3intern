let person = {
  name: "Yogesh",
  age: 25,
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person.greet());
