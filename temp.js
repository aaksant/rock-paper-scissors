const choice = ['rock', 'paper', 'scissors'];

const getComputerSelection = () => {
  return choice[Math.floor(Math.random() * choice.length)];
};

const buttons = [
  document.querySelector('.rock'),
  document.querySelector('.paper'),
  document.querySelector('.scissors')
];

buttons.forEach((button) => {
  
});