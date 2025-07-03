// use if condition within  if
let age = 14;
let isCitizen = true;
let isRegistered = true;

if (age >= 18 ){
    if(isCitizen){
        if(isRegistered){
            console.log("You are eligible to vote");
        } else{
            console.log("You are not eligible due to registration status")
        }
    }else{
        console.log("You are not eligible due  to citizen status");
    }
}else{
    console.log("You are not eligible to vote(Younger) ");
}

//write a program to check if a number is  even or odd 

var num = "7";
if (num % 2 === 0){
    console.log("Number is even")
}else{
    console.log("number is odd")
}

// write a numebr to check if number  is  postive or negtave or zeero
var num = -8;
if(num === 0){
    console.log("number is zeero")
}else if(num > 0){
    console.log("numbebr is postive")
}else{
    console.log("number is  negative")
}



// switch statement

var day = "Monday";

switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Friday":
        console.log("Today is Friday, let's enjoy this weekendd")
        break;
    case "Sunday":
        console.log("Let's go to movie")
        break;
    default:
        console.log("no condition match")
}






// let's find area of shap  using  swich  statements
var areaOfShapes = "circle";
var a = 5;
var b = 10;
var result;

switch(areaOfShapes){
    case "square":
        result = a * a;           // square = side * side
        console.log("Area of  square")
        console.log(result);
        break;

    case "rectangle":
        result = a * b;           // rectangle = length * width
        console.log("Area of  rectangle")
        console.log(result);
        break;

    case "circle":
        var r = 2;
        result = 3.142 * (r * r); // circle = π * r^2
        console.log("Area of  circle")
        console.log(result);
        break;

    default:
        console.log("Invalid shape");
}


// loops

// while loop
// simple while loop to count 1 to 10

var num = 20;
while ( num <= 10){
    console.log(num);
    num++ ;
}

// do while loop
//  simple do while loop to count 1 to 10

var num = 20;
do{
    console.log(num);
    num++ ;
} while ( num <= 10)


// for loop
for (var num = 1; num<=10; num++ ){
    console.log(num)
}

// let's create a table of 5 
var num = 1;
while (num <= 10){
    console.log("5 * " + num + " = " + 5 * num);
    num++;
}