const { Options } = require("./constants");
const prompt = require("prompt-sync")({ sigint: true });

module.exports = class Console {
  constructor() {}

  getMove() {
    let choice = prompt(`Choose your hand (Options: ${Options}): `);
    let valid = false;

    Options.forEach(option => {
      if(choice.toLocaleLowerCase() == option.toLocaleLowerCase()) {
        valid = true;
      }
    });

    if(valid) {
      return choice;
    } else {
      return this.getMove();
    }
  }
};
