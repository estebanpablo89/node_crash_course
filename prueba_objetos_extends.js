class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super();
    this.carname = brand;
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model('Ford', 'Mustang');
console.log(mycar.show());

console.log(mycar.present());

console.log(mycar);
