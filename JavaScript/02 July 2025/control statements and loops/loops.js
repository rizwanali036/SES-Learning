// If statement 

var temperature = 25;
if (temperature > 30){
    console.log("Let's go to  beach");
}else{
    console.log("let's play game");
}

// else i f statement

var temperature = 10;
if (temperature > 40){
    console.log("weather is too hot");
}else if (temperature < 30 && temperature >= 20 ){
    console.log("Cool weather");
}
else{
    console.log("Weather is too cold");
}

// Chelange 

var age = 18;                // person's age
var isCitizen = false;       // true or false
var isRegistered = false;    // true or false

if(age >= 18 && isCitizen && isRegistered){
    console.log("They are eligible to vote.");
}
else if(age >= 18 && !isCitizen){
    console.log("They are not eligible due to citizenship status.");
}
else if(age >= 18 && isCitizen && !isRegistered){
    console.log("They are not eligible due to registration status.");
}
else if(age < 18 || !isCitizen || !isRegistered){
    console.log("They are not eligible to vote.");
}
else{
    console.log("They are not eligible due to some other reasons.");
}
