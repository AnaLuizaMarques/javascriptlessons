//The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('brush teeth', 'cleen the room');
console.log(chores);

//The .pop() Method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

// More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList.slice(1, 4));


const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement (newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept);

// Nested Arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = (numberClusters[2][1]);