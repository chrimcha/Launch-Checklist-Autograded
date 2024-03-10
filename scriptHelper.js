// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const destination = document.getElementById("missionTarget");
    destination.innerHTML = `
                 <h2
                 >Mission Destination</h2
                 >
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
    let h2Status = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
        alert("All fields are required!");
    }
    
    if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number") {
        alert("Invalid Name input!");
    }

    let statusOfPilot = document.getElementById("pilotStatus");
    let statusOfCoPilot = document.getElementById("copilotStatus");

    statusOfPilot.innerHTML = `Pilot ${pilot} is ready for launch`;
    statusOfCoPilot.innerHTML = `Co-pilot ${copilot} is ready for launch`;
 
    if (validateInput(fuelLevel) !== "Is a Number") {
        console.log("Invalid Fuel input!");
    } 

    if (validateInput(cargoMass) !== "Is a Number") {
        console.log("Invalid Cargo input!");
    }

    if (Number(fuelLevel) > 9999 && Number(cargoMass) < 10000) {
        h2Status.style.color = 'green';     
        h2Status.textContent = `Shuttle is Ready for Launch`;
        fuelStatus.textContent = `Fuel level high enough for launch`;
        cargoStatus.textContent = `Cargo mass low enough for launch`;
    } else if (Number(fuelLevel) < 10000 && Number(cargoMass) > 10000) {
        h2Status.style.color = 'red';
        h2Status.textContent = `Shuttle Not Ready for Launch`;
        fuelStatus.textContent = `Fuel level too low for launch`;
        cargoStatus.textContent = `Cargo mass too heavy for launch`;
    } else if (Number(fuelLevel) < 10000 && Number(cargoMass) < 10000) {
        h2Status.style.color = 'red';
        h2Status.textContent = `Shuttle Not Ready for Launch`;
        fuelStatus.textContent = `Fuel level too low for launch`;
        cargoStatus.textContent = `Cargo mass low enough for launch`;
    } else if (Number(cargoMass) > 10000 && Number(fuelLevel) > 9999) {
        h2Status.style.color = 'red';
        h2Status.textContent = `Shuttle Not Ready for Launch`;
        fuelStatus.textContent = `Fuel level high enough for launch`;
        cargoStatus.textContent = `Cargo mass too heavy for launch`;
    }

    list.style.visibility = 'visible';
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
     });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {};

    let randomIndex = Math.floor(Math.random() * planets.length);
    planet = planets[randomIndex];

    return planet
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;