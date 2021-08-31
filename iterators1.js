//The .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));

//The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => {
  return animal[0];
});
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(numbers => {
  return numbers / 100;
});
console.log(smallNumbers);

//The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumberss = randomNumbers.filter(numbers => {
  return numbers < 250;
});
console.log(smallNumberss);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(words => {
  return words.length > 7;
});
console.log(favoriteWords);