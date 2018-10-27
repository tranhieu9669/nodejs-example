function Person(){
    this.message = " hello4 Nodejs  !! ";
    this.sayHello = function () {
        console.log( this.message);
    }
}
module.exports = Person;