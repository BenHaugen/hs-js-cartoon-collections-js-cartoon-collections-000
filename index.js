function dwarfRollCall(dwarves) {
  var array = [];
  for (let i = 0; i < dwarves.length; i++) {
    array.push(`${i+1}. ${dwarves[i]} `)
  }
  return array.join("")
}

function summonCaptainPlanet(planeteerCalls) {
  var array = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    array.push(planeteerCalls[i].toUpperCase() + "!")
  }
  return array
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) 
    return true
  }
  return false
}


function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert" || foods[i] === "swiss") {
    return foods[i]
  }
    }
  return "no cheese!"
}

function wordsWithB (words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === 'b') {
      return words
    }
  }
}
