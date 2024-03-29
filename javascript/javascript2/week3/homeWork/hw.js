//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
function delay() {
  let d = new Date();
  let n = d.toLocaleTimeString();
  setTimeout(() => {
    console.log("text called after 2.5 seconds");
  }, 2500);
  console.log(n);
}
delay();

//Create a function that takes 2 parameters: delay and stringToLog.
function delayTime(delay, stringToLog) {
  setTimeout(() => {
    //Calling this function should log out the stringToLog after delay seconds.
    console.log(stringToLog);
  }, delay * 1000);
}

//Call the function you have created with some different arguments.
delayTime(2, "This function logout after 2 seconds");
delayTime(4, "This function logout after 4 seconds");
//Create a button in html. When clicking this button,
//use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const buttontag = document.querySelector("#delayTime");
buttontag.addEventListener("click", () => {
  delayTime(5, "buttton display after  5 seconds");
});
//Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn.
//Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function.
//Try call the third function once with the Earth function and once with the Saturn function.
function earthLogs() {
  console.log("logs out eartth");
}
//earthLogs();
function saturnLogs() {
  console.log("logs out saturn");
}
//saturnLogs();
function planetlogFunction(universe) {
  universe();
}
planetlogFunction(earthLogs);
planetlogFunction(saturnLogs);

//Create a button with the text called "Log location".
//When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
const logBtn = document.getElementById("location");
const para = document.createElement("div");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`latitude : ${latitude} longitude : ${longitude}`);
      para.innerHTML = `latitude : ${latitude} longitude : ${longitude}`;
    });
  }
}
logBtn.appendChild(para);
document.getElementById("location").addEventListener("click", getLocation);

//Create a function called runAfterDelay. It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function.
//Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}
runAfterDelay(4, function () {
  console.log("task 7: should logout after 4 seconds");
});
runAfterDelay(8, function () {
  console.log("Task 7 : should logout after 8 seconds");
});
//A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
document.addEventListener("dblclick", () => console.log("Double click"));
//Create a function called jokeCreator that has three parameters:
//shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
//If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke.
//And vice versa.
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  return shouldTellFunnyJoke;
}
function shouldTellFunnyJoke(joke) {
  if (joke === true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}
function logFunnyJoke() {
  console.log("Its a Funny Joke");
}

function logBadJoke() {
  console.log("Its a Bad Joke");
}
shouldTellFunnyJoke(true);
shouldTellFunnyJoke(false);
//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions
const arrFunction = [
  function () {
    console.log("First array function");
  },
  function () {
    console.log("Second array function");
  },
  function () {
    console.log("Third array function");
  },
];
for (let i = 0; i < arrFunction.length; i++) {
  arrFunction[i]();
}
//Create a function as a const and try creating a function normally. Call both functions
function addition(a, b) {
  return a + b;
}
console.log("Normal Function", addition(2, 3));

// a function as const
const One = (x, y) => {
  return x + y;
};
console.log("Function assign to a Const", One(2, 3));

//Create an object that has a key whose value is a function. Try calling this function.

const carCol = () => {
  return "red";
};
const carObj = { Name: "Audi ", Model: 2021, Color: carCol };
console.log("Car color is : ", carObj.Color());
