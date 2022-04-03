const Console = require("./Console");
const Computer = require("./Computer");
const Game = require("./Game");

let consolePlayer = new Console();
let computerPlayer = new Computer();

let game = new Game(consolePlayer, computerPlayer);
game.start();

/*
  Type of players:

  console: gives play through the console
  computer: (no argument) random play (with argument) plays argument

*/
