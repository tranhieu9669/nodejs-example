//var sayHello =  require('./hello.js');
// sayHello();


/* ojec */
// var person = {
// 	_constructor 
// 	firstName 	: " tran",
// 	lastName	: " phi ",
// 	sayHello	: function(){
// 		console.log(" Helle, " + this.firstName + " " + this.lastName);
// 	}
// }


// ke thua trong js prototype
// function Person ( name , password)
// {
// 	this.name  = name;
// 	this.password = password;
// }

// Person.prototype.getName = function (){
// 	return this.name;
// }

// Person.prototype.getPassword = function()
// {
// 	return this.password;
// }

// Person.prototype.getLevel = function (){
// 	return this.level;
// }

// function user(name){
// 	this.name = name;
// }

// user.prototype = new Person();

// var Person 	= new Person("li", "78910");
// var user 	= new user("teo", "12345");

// //console.log(Person.getName());

// Date.prototype.vnFormat = function()
// {
// 	var yyy 	= this.getFullYear();
// 	var mm 		= this.getMonth() + 1;
// 	var dd 		= this.getDate();
// 	return dd + "/" + mm + "/" + yyy;
// }
// var now = new Date();
// var xms = new Date(2016,11,25);
// console.log(now.vnFormat());
// console.log(xms.vnFormat());


var greet = require("./greet");
greet.english();
greet.vietnamese();