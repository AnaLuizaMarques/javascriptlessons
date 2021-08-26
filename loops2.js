// The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
    while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
    }

// Do...While Statements
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;
    do {
    cupsAdded++;
    console.log(cupsAdded);
    } while (cupsAdded < cupsOfSugarNeeded);

// The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.'){
  break; 
    }
} 
console.log('And if you don\'t know, now you know.');