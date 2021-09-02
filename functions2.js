// Helper Functions
function monitorCount(rows, columns) {
    return rows * columns;
}
function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

// Function Expressions
const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
      return true
    } else {
      return false
    }
}
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

// Arrow Functions
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
}

//  Concise Body Arrow Functions
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
