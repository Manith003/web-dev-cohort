// day 58 oops level 2:

// learn about prototype in js, shared values in all instances

// example:

function Toffee(name){
    this.name = name;
}

var t1 = new Toffee("chocolate");
var t2 = new Toffee("vanilla");


// we see that t1 and t2 have their own sayName function, which is not efficient.
// we can use prototype to share the function between instances\
Toffee.prototype.sayName = function(){
    console.log("hello from prototype");
}
// now t1 and t2 will share the same sayName function

// sabse phele property ko aapke object mein dhundhege nahi mila toprototype mein dhundte hai.

// one important thing that in js everything is an object, even functions are objects. and every object has a prototype property.

// ONE important thing to note 
// example:

function Toffee(name){  
    this.name = "mr. "+name;
    this.printName = function(){
        console.log(name);
    }
}

let t5 = new Toffee("chocolate");

//it print chocolate but expected output is mr. chocolate
// to achieve this we can use this.name in printName function
Toffee.prototype.printName = function(){
    console.log(this.name);
}