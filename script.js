// Write your JavaScript code here!



window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.        
        let randomPlant = pickPlanet(listedPlanets);

        let name = randomPlant.name;
        let diameter = randomPlant.diameter;
        let star = randomPlant.star;
        let distance = randomPlant.distance;
        let moons = randomPlant.moons;
        let imageUrl = randomPlant.image;

        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);

    })
    
    //eventlistener for form bottom formSubmit
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {        
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
        
        event.preventDefault();
    });
 });