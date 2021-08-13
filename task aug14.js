/* 
Zen class Task ( August 14 )

Call() Method in javascript :

-> In JavaScript all functions are object methods.
-> With the call() method, you can write a method that can be used on different objects.
-> The call() method is a predefined JavaScript method.
-> It can be used to invoke (call) a method with an owner object as an argument (parameter).
-> With call(), an object can use a method belonging to another object.

*/

const guy = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const guy1 = {
  firstName:"Jose",
  lastName: "Sangeeth"
}
const guy2 = {
  firstName:"Arun",
  lastName: "kumar"
}
console.log(guy.fullName.call(guy1));
console.log(guy.fullName.call(guy2));

// The call() method can accept arguments:

const detail = {
     fullName: function(city, country) {
     return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const detail1 = {
  firstName:"Jose",
  lastName: "Sangeeth"
}
console.log(detail.fullName.call(detail1, "madurai", "Tamilnadu"));

/*
apply() Method in javascript :

-> With the apply() method, you can write a method that can be used on different objects.

The Difference Between call() and apply() :

-> The call() method takes arguments separately.

-> The apply() method takes arguments as an array.
*/

const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"Satheesh",
  lastName: "kumar"
}

console.log(person.fullName.apply(person1, ["Trichy", "Tamilnadu"]));

/*
Bind() Method in javascript :

-> Bind() returns a new function, allowing you to pass in an array and any number of arguments.
*/

const friend1 = {
  firstName:"Jose",
  lastName: "Sangeeth"
}
const friend2 = {
  firstName:"Arun",
  lastName: "kumar"
}

function invite(greeting1,greeting2)
{
  console.log(greeting1+" "+this.firstName+" "+this.lastName+" "+greeting2);
}

var invitefriend1 = invite.bind(friend1);
var invitefriend2 = invite.bind(friend2);

invitefriend1('hello','how are you');
invitefriend2('hello','how are you');

/*
When we use the bind() method:

1. The JS engine is creating a new invite instance and binding friend1 and friend2 as its 'this' variable.
   So basically it copies the invite function.
2. After creating a copy of the invite function it is able to call inviteFriend1( ) and inviteFriend2( ), 
   although it wasn’t on the friend1 and friend2 object initially. 
   It will now recognizes its properties and its methods.

Overall view :

Call and apply are pretty interchangeable. Both execute the current function immediately. 
You need to decide whether it’s easier to send in an array or a comma separated list of arguments. 
Whereas Bind creates a new function that will have this set to the first parameter passed to bind().

*/