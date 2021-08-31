// Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();
alienShip.takeOff();

// Nested Objects
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
}; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  spaceship.passengers = [{name: 'Maria'}];
  let firstPassenger = spaceship.passengers[0];

