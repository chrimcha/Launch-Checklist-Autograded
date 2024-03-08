// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"; 
    }
    
    if (isNaN(testInput)) {
        return "Not a Number";
    }
    
    if (isNaN(testInput) === false) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
        Event.preventDefault();
    }

    if (validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number") {
        alert("Invalid Name input!");
        Event.preventDefault();
    }

// change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. // The text of the h2 element, launchStatus, should also change to “Shuttle not ready for launch” and the color should change to red.
    let statusOFLaunch = document.getElementById("launchStatus");
    // let list = document.getElementById("faultyItems");

    if (validateInput(fuelLevel.value) !== "Is a Number") {
        alert("Invalid Fuel input!");
        Event.preventDefault();
    }

    if (Number(fuelLevel.value) > 9999) {
        alert("Fuel input must be less than 10,000!");
        Event.preventDefault();
    } 

// if (fuelLevel.value < 10000) {
//     list.setAttribute("style", "visibility: visible;");
//     fuelLevel.innerHTML = `Not enough fuel for the journey!`;
//     statusOFLaunch.innerHTML = `Shuttle not ready for launch`;
//     statusOFLaunch.setAttribute("style", "color: red;");
// }

// change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. // The text of launchStatus should also change to “Shuttle not ready for launch” and the color should change to red.
    if (validateInput(cargoMass.value) !== "Is a Number") {
        alert("Invalid Cargo input!");
        Event.preventDefault();
    }

    if (Number(cargoMass.value) > 10000) {
        alert("Cargo Mass is too large, can not exceed 10,000!");
        Event.preventDefault();
    }

    // if (validateInput(pilot) === "")
    // Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot’s name and the co-pilot’s name.
    // let statusOfPilot = document.getElementById("pilotStatus");
    // let statusOfCoPilot = document.getElementById("copilotStatus");

    // statusOfPilot.innerHTML = `Pilot ${pilot.value} Bob Ready`;
    // statusOfCoPilot.innerHTML = `Co-pilot ${pilot.value} Bob Ready`;


    // the div with the id faultyItems, should be updated if something is not ready for launch

    // If the shuttle is ready to launch, change the text of launchStatus to green and display “Shuttle is ready for launch”.

    //if statements, cargo, fuel, and validate "is copit a string"
    //validateInput(pilot) will tell you if it a string, a number, or empty


    // validateInput(pilot)
    // validateInput(copilot)
    // validateInput(fuelLevel)
    // validateInput(cargoMass)

    // if ()

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;