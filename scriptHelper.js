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
    // let form = document.querySelector("form");
    // form.addEventListener("submit", function(event) {
    // let nameOfPilot = document.querySelector("input[name=pilotName]");
    // let nameOfCoPilot = document.querySelector("input[name=copilotName]");
    // let levelOfFuel = document.querySelector("input[name=fuelLevel]");
    // let massOfCargo = document.querySelector("input[name=cargoMass]");
    
    // if (nameOfPilot.value === "" || nameOfCoPilot.value === "" || levelOfFuel.value === "" || massOfCargo.value === "") {
    //     alert("All fields are required!");
    //     event.preventDefault();

    // if (typeof(nameOfPilot.value) !== "string" || typeof(nameOfCoPilot.value) !== "string") {
    //     alert("Names mus");
    //     event.preventDefault();
    // }

    // if (typeof(levelOfFuel.value) !== "number" || typeof(massOfCargo.value) !== "number") {
    //     alert("Names mus");
    //     event.preventDefault();
    // }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
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