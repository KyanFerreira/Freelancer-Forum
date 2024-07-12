let averageText = "The Average Starting Price Is $"; //Text the paragraph will have
let maxNumberOfLancers = 10; // Max number of freelancers that will show up on the page
let numberComparison = 0; //How I count to find what number I am on and also use this to figure out the average
let sumOfAllJobs = 0; //Value that sums all the starting prices on the page
let averageAmount = 0; //The average amount that will show up on the page when calculated
let nameList = ["Kyan", "Lorenzo", "Gerald", "Margie", "Jose", "David", "Esteban", "Ada", "Prashant", "Jousef", "Ronald"]; // List of names to be chosen at random
let occupationList = ["Engineer", "Carpenter", "Developer", "Teacher", "Physical Therapist", "Chef", "Security"]; //list of jobs to be chosen at random
let startingPriceList =[10,30,90,50,77,122,400]; // list of starting prices that will be chosen at random
const paragraphinfo = document.querySelector("#Average"); // Grabing the dom element for the Paragraph
paragraphinfo.innerText = averageText + averageAmount;

const FreeLancerObjectList = [ // List that will show on initilization and also where all other values will be added to. 
{ name: "Kyan", occupation: "Masked Vigilante", startingPrice: 200 },
{ name: "Lorenzo", occupation: "Data Warehouse Engineer", startingPrice: 30 },
{ name: "Margie", occupation: "Queen", startingPrice: 600 },
];

function initializeData(){// The purpose of this function is to initialize the list above

for(i = 0; i < FreeLancerObjectList.length; i++){
let freelanceSingular = FreeLancerObjectList[i];
const freelanceListcheck = document.querySelector("#feelancerList").insertRow();
let c1 = freelanceListcheck.insertCell(0);
let c2=freelanceListcheck.insertCell(1);
let c3 = freelanceListcheck.insertCell(2);
c1.innerHTML=freelanceSingular.name;
c2.innerHTML=freelanceSingular.occupation;
c3.innerHTML='$' + freelanceSingular.startingPrice;
numberComparison++;
sumOfAllJobs += freelanceSingular.startingPrice;
console.log(sumOfAllJobs);
console.log(numberComparison);
averageAmount = giveAverageNumber(sumOfAllJobs, numberComparison); //Figuring out correct Average
paragraphinfo.innerText = averageText + averageAmount.toFixed(2);
}
}

function addTableData() {// The purpose of this function is to be called on a timed interval and fill up the space with random names, jobs and prices

numberComparison++;
if(maxNumberOfLancers >= numberComparison){
    const nameInUse = nameList[Math.floor(Math.random() * nameList.length)];
    const occupationInUse = occupationList[Math.floor(Math.random() * occupationList.length)];
    const startingPriceInUse = startingPriceList[Math.floor(Math.random() * startingPriceList.length)];
    const freelanceListcheck = document.querySelector("#feelancerList").insertRow();
    let c1 = freelanceListcheck.insertCell(0);
    let c2=freelanceListcheck.insertCell(1);
    let c3 = freelanceListcheck.insertCell(2);
    c1.innerHTML=nameInUse;
    c2.innerHTML=occupationInUse;
    c3.innerHTML='$' + startingPriceInUse;
    sumOfAllJobs += startingPriceInUse;
    averageAmount = giveAverageNumber(sumOfAllJobs, numberComparison); //Figuring out correct Average
    
    //Add values to the freeLancerObjectList
    let addObjectFreelancer = {name: nameInUse, occupation: occupationInUse, startingPrice: startingPriceInUse  };
    FreeLancerObjectList.push(addObjectFreelancer);
}


if (maxNumberOfLancers <= numberComparison) {
clearInterval(addShapeIntervalId);
}
paragraphinfo.innerText = averageText + averageAmount.toFixed(2);
}

function giveAverageNumber(totalSumOfJobs, numberToDivide){
    let numberToReturn;
    numberToReturn = totalSumOfJobs/numberToDivide;
    return numberToReturn;
    
}

//Code that runs First portion is the timer. The second portion is the intilization of the data.
const addShapeIntervalId = setInterval(addTableData, 2000);
initializeData();
console.log(FreeLancerObjectList);

