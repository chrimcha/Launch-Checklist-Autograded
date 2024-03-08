// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const destination = document.getElementById("missionTarget");
    destination.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
    
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
    let h2 = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
        document.preventDefault();
    }
    
    if (validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number") {
        alert("Invalid Name input!");
        document.preventDefault();
    }

// change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. // The text of the h2 element, launchStatus, should also change to “Shuttle not ready for launch” and the color should change to red.  
    if (validateInput(fuelLevel.value) !== "Is a Number") {
        alert("Invalid Fuel input!");
        document.preventDefault();
    } else if (Number(fuelLevel.value) < 10000) {
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        h2.innerHTML = `Shuttle Not Ready for Launch`;
        h2.setAttribute("style", "color: red;");
    }

// change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. // The text of launchStatus should also change to “Shuttle not ready for launch” and the color should change to red. 
    if (validateInput(cargoMass.value) !== "Is a Number") {
        alert("Invalid Cargo input!");
        document.preventDefault();
    } else if (Number(cargoMass.value) > 10000) {
        list.setAttribute("style", "visibility: visible;");
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        h2.innerHTML = `Shuttle Not Ready for Launch`;
        h2.setAttribute("style", "color: red;");
    }

// If the shuttle is ready to launch, change the text of launchStatus to green and display “Shuttle is ready for launch”.
    if (pilot.value !== "" && copilot.value !== "" && Number(fuelLevel.value) > 10000 && Number(cargoMass.value) < 10000) {
        list.setAttribute("style", "visibility: visible;");
        h2.innerHTML = `Shuttle is Ready for Launch`;
        h2.setAttribute("style", "color: green;");
    }

// Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot’s name and the co-pilot’s name.
    let statusOfPilot = document.getElementById("pilotStatus");
    let statusOfCoPilot = document.getElementById("copilotStatus");

    statusOfPilot.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    statusOfCoPilot.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
  
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(json) {
            console.log(json);
        });
     });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {};

    //get random number and get planet with that index
    planet = Math.random();

    return planet
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;