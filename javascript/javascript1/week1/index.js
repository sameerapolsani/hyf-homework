//Start of A future age calculator
console.log("A future age calculator");
const yearOfBirth = 1990;
const yearFuture = 2040;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);
//End of future age calculator



//A dog age calculator
let dogYearOfBirth = 2017;
let dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}





// house price estimater
//peter house price calculation
let width = 8;
let depth = 10;
let hight = 10;
let gardenSize = 100;
let VolumeInMeters = width*depth*hight;
let peterestimatedhousePrice = VolumeInMeters * 2.5 *1000 + gardenSize *300;
let peteractualhouseprice = 2500000;
if (peteractualhouseprice > peterestimatedhousePrice){
    console.log("peter paid little");
}
else{
    console.log("peter paid little");
}

//julia house price

let wide = 5;
let deep = 8;
let high = 11;
let gardensize = 70;
let volumeInMeters = wide*deep*high;
let juliasstimatedhousePrice = volumeInMeters * 2.5 *1000 + gardensize *300;
let juliasactualhouseprice = 1000000;
if (juliasactualhouseprice < juliastimatedhousePrice){
    console.log("julia paid little");
}
else{
    console.log("julia paid little");
}











//startup name generator
console.log("start up name")
let  firstWords = ["easy","super","lazend","super","good","advik","some","tasty","sam","next",];
let  secondWords =["small","bigshop","milagrow","smile","dwarka","haveli","nice","spice","create","future"];

const randomNumber = math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + secondWords [randomNumber];
console.log('the startup is ${satrtupname} and conatains ${startupName.lengh} charecters');