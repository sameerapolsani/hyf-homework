//flight booking full name
console.log("flight booking full name function")
function getFullname(FirstName,surName,gender,useFormalName){
    if(gender === "male" && useFormalName === true){
        console.log( `your custumer name lord ${FirstName} ${surName}`)
    }
        else if(gender === "female" && useFormalName === true){
            console.log (`your custumer name lordes ${FirstName} ${surName}` ) 
        }
        else if(gender = "" && useFormalName ===false){
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

const class07Students = [];
function addStudentToClass(studentName) {
    if(class07Students.length > 6 && studentName !== Qween)
    console.log("Cannot add more students to class 07")
    else if (class07Students.includes(studentName)){
        console.log("Student ${studentName} is already in the class")
    }
    else if (studentName === "Qween"){
        class07Students.push(studentName)
        console.log(class07Students);}
        else if(studentName === ""){
            console.log("not add emty string")
        }
    }
    addStudentToClass("");
    addStudentToClass("Qween");
    addStudentToClass("sameera");
    addStudentToClass("sayali");
    addStudentToClass("candi");
    addStudentToClass("ati");
    addStudentToClass("aha");
    addStudentToClass("sameera");




        
        




console.log(class07Students);

function getNumberOfStudents() {
  return class07Students.length;

}

//candy helper optional
const  boughtCandyPrices = [ ] ;

function addCandy(candyType,weight,price) {
 boughtCandyPrices.push(candyType,weight*price);
 addCandy("Sweet", 20 * 0.5);
addCandy("Chocolate", 9 * 0.7);
addCandy("Toffee", 19 * 1.1);
addCandy("ChewingGum", 8 * 0.03);
console.log(boughtCandyPrices);

let amountToSpend = Math.floor(Math.random() * 100);
let totalprice = 0;

function canBuyMoreCandy() {
	for (let i = 0; i < boughtCandyPrices.length; i++) {
		totalprice = totalprice + boughtCandyPrices[i];
	}

	if (totalprice > amountToSpend) {
		console.log("You can buy more, so please do");
	} else {
		console.log("Enough candy for you");
	}
}




}


//event day


const weekday = ["sunday","monday","tuseday","wednesday","thursday","friday"];


function getEventWeekday(eventHeldDays) {
    const today = new Date();
    const eventDay = (today.getDay() +eventHeldDays) % 7;
    const eventday = weekday[eventDay];
    return `Today is ${weekday[today.getDay()]} and the event is in ${eventHeldDays}` 
}

console.log(getEventWeekday(9));
