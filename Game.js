const { Options, Interactions } = require("./constants");
const prompt = require("prompt-sync")({ sigint: true });

module.exports = class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;

    this.playing = true;
  }

  start() {
    while(this.playing) {
      this.round();
      // this.playing = false;
    }
  }

  round() {
    console.clear();
    console.log("Rock Paper Scissors!");

    let move1 = this.player1.getMove();
    console.log(`Player one threw ${move1}`);

    let move2 = this.player2.getMove();
    console.log(`Player two threw ${move2}`);

    let result = `(${move1} vs ${move2})`;
    switch(this.determineWinner(move1, move2)) {
    case 0:
      // draw
      result = "Its a draw! " + result;
      break;
    case 1:
      // player1
      result = "Player one wins! " + result;
      break;
    case 2:
      // player2
      result = "Player two wins! " + result;
      break;
    }

    console.log(result);
    prompt("\nPress enter to continue...");
  }

  determineWinner(move1, move2) {
    move1 = move1.toLocaleLowerCase();
    move2 = move2.toLocaleLowerCase();

    if(move1 == move2) { return 0; }

    let result;
    Interactions.forEach(interaction => {
      const killer = interaction[0].toLocaleLowerCase();
      const killed = interaction[1].toLocaleLowerCase();

      // console.log(move1, move2, killer, killed)

      if(move1 == killer && move2 == killed) { result = 1; }
      if(move1 == killed && move2 == killer) { result = 2; }
    });
    return result;
  }
};
