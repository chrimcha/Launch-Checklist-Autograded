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
    }
    
    if (validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number") {
        alert("Invalid Name input!");
    }

    let statusOfPilot = document.getElementById("pilotStatus");
    let statusOfCoPilot = document.getElementById("copilotStatus");

    statusOfPilot.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    statusOfCoPilot.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
 
    if (validateInput(fuelLevel.value) !== "Is a Number") {
        console.log("Invalid Fuel input!");
    } 

    if (validateInput(cargoMass.value) !== "Is a Number") {
        console.log("Invalid Cargo input!");
    }
    
    if (Number(fuelLevel.value) < 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        h2.innerHTML = `Shuttle Not Ready for Launch`;
        h2.setAttribute("style", "color: red;");        
    }

    if (Number(cargoMass.value) > 10000) {
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        h2.innerHTML = `Shuttle Not Ready for Launch`;
        h2.setAttribute("style", "color: red;");
    }

    if (pilot.value !== "" && copilot.value !== "" && Number(fuelLevel.value) > 9999 && Number(cargoMass.value) < 10000) {        
        h2.innerHTML = `Shuttle is Ready for Launch`;
        h2.setAttribute("style", "color: green;");
    }
    
    list.setAttribute("style", "visibility: visible;");
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