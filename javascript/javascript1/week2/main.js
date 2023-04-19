//flight booking full name
console.log("flight booking full name function")
function getFullname(FirstName,surName,gender,useFormalName)
{
    if(gender === "male" && useFormalName === true)
    {
        console.log( `your custumer name lord ${FirstName} ${surName}`)
    }
        else if(gender === "female" && useFormalName === true)
        {
            console.log (`your custumer name lordes ${FirstName} ${surName}` ) 
        }
        else if(gender = "" && useFormalName ===false)
        {
            console.log(`your custemer name ${FirstName} ${surName}`)
        }
        else 
           console.log(`enter information`)


    }    
    getFullname("sameera","polsani","female",true);
    getFullname("asan","shath","male",true);
    getFullname("suraj","varma","",true);
    getFullname("","","",false);

//console.log();
//flight booking end 

// weather wear


function wearClothsOnTempreture(tempreture) {
	if (tempreture <= 5) {
		console.log (" wear thermal jackets ");
	} else if (tempreture > 5 && tempreture <= 17) {
        console.log("wear warm jackets");
	} else if (tempreture >17 && tempreture <=30) {
		console.log("wear shorts and a t-shirt");
	} 
	}

const clothesToWear = wearClothsOnTempreture(18);
console.log("clothesToWear");
//End of Weather wear

// student manager
console.log("Student manager!")

const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length < 6) {
        if (studentName !== "") {
            if (!class07Students.includes(studentName)) {
                class07Students.push(studentName);
            } else {
                console.log(`Student ${studentName} is already in the class`);
            }
        } else {
            console.log("You cannot add an empty string to a class");
        }
    }
    else if ((!class07Students.includes("queen")) && (studentName === "queen")){
        class07Students.push(studentName);
    }
    else {
        console.log("Cannot add more students to class 07");
    }
}

addStudentToClass('Mari')
addStudentToClass('vashitha')
addStudentToClass('Luigi')
addStudentToClass('sachi')
addStudentToClass('Ani')
addStudentToClass('Mario')
addStudentToClass('')
addStudentToClass('Candy')
addStudentToClass('inja')
addStudentToClass('queen')

function getNumberOfStudents() {
    return class07Students.length;
}

console.log(`Length of the class: ${getNumberOfStudents()}`);
console.log(class07Students);

//candy helper optional
let boughtCandyPrices = [ ] ;

function addCandy(candyType,weight) {
    console.log(`${weight}  gm  of ${candyType}`)
    if(candyType === "sweet"){
        boughtCandyPrices.push(weight*0.5);
    }
    else if(candyType === "chokolate"){
        boughtCandyPrices.push(weight * 0.7);
    }
    else if(candyType === "tofee"){
        boughtCandyPrices.push(weight * 1.1)
    }
    else if(candyType === "chewing-gum"){
        boughtCandyPrices.push(weight * 0.03)
    }
}


let amountToSpend = Math.floor(Math.random() * 100);
function canBuyMoreCandy() {
    let amountRemaining = 0;
	for (let i = 0; i < boughtCandyPrices.length; i++) {
		amountRemaining = amountRemaining+ boughtCandyPrices[i];
	}

	if (amountRemaining > amountToSpend) {
		console.log("You can buy more, so please do");
	} else {
		console.log("Enough candy for you");
	}
}
console.log("your purchase");
addCandy("tofee ",500);
addCandy("sweet",500);
canBuyMoreCandy();







//event day


const weekday = ["sunday","monday","tuseday","wednesday","thursday","friday"];


function getEventWeekday(eventHeldDays) {
    const today = new Date();
    const eventDay = (today.getDay() +eventHeldDays) % 7;
    const eventday = weekday[eventDay];
    return `Today is ${weekday[today.getDay()]} and the event is in ${eventHeldDays}` 
}

console.log(getEventWeekday(9));
