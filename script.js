// Write your JavaScript code here!

window.addEventListener("load", function() {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    
    //eventlistener for form bottom formSubmit
    let submitButton = document.getElementById("formSubmit");

    submitButton.addEventListener("click", function() {
        let list = document.getElementById("input[name=faultyItems]");
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        // list.setAttribute("style", "visibility: hidden;");
        // console.log(pilot.value);
        // console.log(copilot.value);
        // console.log(fuelLevel.value);
        // console.log(cargoMass.value);
        // console.log("completed");
        // alert("All fields are required!");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
        
    });
 });