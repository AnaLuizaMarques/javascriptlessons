// Truthy and Falsy
let wordCount = 2;

if (wordCount) {
    console.log('Great! You\'ve started your work!');
} else {
    console.log('Better get to work!');
}

let favoritePhrase = '';

if (favoritePhrase) {
    console.log('This string doesn\'t seem to be empty.');
} else {
    console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment
let tool = 'marker';
let writingUtensil = tool || 'pen';
console.log('The ${writingUtensil} is mightier than the sword.');

// Ternary Operator
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log('I don\'t love that!');

// Else If Statements
let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {  
    console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
} else {
    console.log('Invalid season.');
}

// The switch keyword
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
}