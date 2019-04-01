const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/



const section = document.createElement("section")
section.id= "planets"
const domElement = document.getElementById("display-container")
planets.forEach(planet =>{
section.innerHTML += `<p>${planet}</p>`

})
domElement.appendChild(section)
const planetEl = document.getElementById("planets")
