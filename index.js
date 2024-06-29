function Person(name, stream) {
  this.name = name;
  this.stream = stream;
  this.greeting = function () {
    console.log("Hello Good morning!! my name is Natasha Romanoff");
  };
}
function Person1(name, stream) {
  this.name = name;
  this.stream = stream;
  this.greeting = function () {
    console.log("Hello Good morning!! my name is Natasha Romanoff");
  };
}

module.exports = [Person, Person1];

console.log("===", module);
