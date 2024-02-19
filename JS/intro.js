// Data Types
let stringVar = "Hello, world!";
let numberVar = 42;
let booleanVar = true;
let arrayVar = [1, 2, 3, 4, 5];
let objectVar = { name: "John", age: 30 };

// Loops
// For loop
for (let i = 0; i < arrayVar.length; i++) {
    console.log(arrayVar[i]);
}

// While loop
let i = 0;
while (i < arrayVar.length) {
    console.log(arrayVar[i]);
    i++;
}

// Conditional Statements
if (numberVar > 0) {
    console.log("NumberVar is positive");
} else if (numberVar === 0) {
    console.log("NumberVar is zero");
} else {
    console.log("NumberVar is negative");
}

// Functions
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// Objects
let person = {
    name: "Bob",
    age: 25,
    greet: function() {
        return "Hello, my name is " + this.name + " and I'm " + this.age + " years old.";
    }
};

console.log(person.greet());


function callbackFunction() {
    console.log("Callback function called.");
}

doSomething(callbackFunction);

// Higher-order Functions
function multiplyByTwo(x) {
    return x * 2;
}

function operateOnArray(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

let originalArray = [1, 2, 3, 4, 5];
let modifiedArray = operateOnArray(originalArray, multiplyByTwo);
console.log(modifiedArray); // Output: [2, 4, 6, 8, 10]