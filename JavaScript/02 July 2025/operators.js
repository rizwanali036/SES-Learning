// Comparison operators

// 4- Comparison operators (Comparison operators in javaScript are use to compair values and return a boolean result (true or false)).

// Equal (==): Check if two values are equal, perfoming type coericion if necessary. 

var a = 5;
var b = 5;
if (a == b) {
    console.log("A is equal to  b");
}
else{
   console.log( "A is not equal to b")
};

// Strict Equal (==): Check if two values are equal without perfoming type coericion

console.log(5 === "5");

// Not Equal (!=) Checks if two  values are not equal, perfoming type coercion if necessary.
console.log(5 != 5);

//? Greater Than (>): Checks if the value on the left is greater than the value on the right.

console.log (5 > 2);

//? Less Than (<): Checks if the value on the left is less than the value on the right.

console.log (5 < 2);


//? Greater Than or Equal to (=>): Checks if the value on the left is grater than or equal to the value on the right.

console.log (5 <= 10);

//? less Than or Equal to (=>): Checks if the value on the left is less than or equal to the value on the right.

console.log (5 >= 10);




// Logical  Operators




//* There are three main logical operators: && (logica AND), (logical OR), and ! (logical NOT).

//? Logical AND (&&): Returns true if both operands are true otherwise, it returns false.

var x = 5;
var y = 10;

console.log(x > 10 && y < 11);


//? Logical OR ( || ): Returns true if at least one of the operands is true, otherwise, it returns false.

var a = 15;
var b = 0;

console. log(a > 10 || b > 10);

//? Logical NOT (!): Returns true if the operand is false, and false if the operand is true.

var isOpen = false;
console.log(!isOpen);


// And operator simple example
// ! Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license ?
var age = 9;
var hadDrivingLicence = true;
console.log (age >= 18 && hadDrivingLicence);


// Conditional (ternary) operator

// Example1
var age = 15;
var result = age >= 18 ? "Yes" : "No";
console.log(result);

// Example2
var score = 58;
var result = score >= 60 ? "pass" : "Fail";
console. log(result);



