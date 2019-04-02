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




/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const section2 = document.createElement("section") 
section.id = "planets2"

//document.body.appendchild(section2)


const planetArray = planets.map(planet => {
   
   let firstLetter = planet.split("")[0];
   
    let upperCaseLetter = firstLetter.toUpperCase()
    let restOfWord = planet.slice(1)
   return upperCaseLetter + restOfWord

})
console.log(planetArray)


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/



const section3 = document.createElement("section")
section.id = "planets3"
document.body.appendChild(section3)

const newArray = planets.filter(planet => planet.includes("e"))

newArray.forEach(planet => {
    section3.textContent += " " + planet
})