// Repeating Tasks Manually
const vacationSpots = ['New York', 'London', 'Seychelles'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// The For Loop
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}

// Looping in Reverse
for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
}
  
for (let counterAgain = 3; counterAgain >= 0; counterAgain--) {
    console.log(counterAgain);
}

// Looping through Arrays
const vacationnSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationnSpots.length; i++){
    console.log('I would love to visit ' + vacationnSpots[i]);
}

//Nested Loops
const bobsFollowers = ['Maria', 'Felicity', 'Carlos', 'Joseph'];
const tinasFollowers = ['Maria', 'Joseph', 'Jacob'];
var mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for(let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
      console.log(mutualFollowers)
    }
  }
}

