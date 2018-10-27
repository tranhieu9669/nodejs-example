var hello = require("./hello.js");

hello();

var hello2 = require("./hello1").sayHello;
hello2();

var hello3 = require("./hello2");
hello3.sayHello();

hello3.message = " changed hello Node Js !! ";
var hello4 = require("./hello2");
hello4.sayHello();

// sự thay đổi khi chưa khởi tạo NEw
var hello43 = require("./hello4");

var hello42 = new hello43();

hello42.sayHello();

var hello5 =require("./hello5").sayHello;

hello5();