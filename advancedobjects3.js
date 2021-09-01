// Property Value Shorthand
function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
}

const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// Destructured Assignment
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
};
const { functionality } = robot;
functionality.beep();