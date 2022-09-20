const robotDuck = {
  name: 'Duck T-800',
  canSpeak: true,
  speak: function () {
    return "I'll be quak!";
  },
};

const { name: petName } = robotDuck;

console.log(petName);