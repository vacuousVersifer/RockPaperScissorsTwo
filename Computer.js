const { Options } = require("./constants");

module.exports = class Console {
  constructor() {}

  getMove() {
    let move = Options[Math.floor(Math.random() * Options.length)];
    return move;
  }
};
