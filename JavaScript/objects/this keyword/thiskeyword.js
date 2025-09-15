let car = {
  brand: "Toyota",
  model: "Fortuner",
  getInfo: function() {
    return this.brand + " " + this.model;
  }
};

console.log(car.getInfo());
