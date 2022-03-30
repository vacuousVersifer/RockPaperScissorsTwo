module.exports = class Player {
    constructor(hand) {
        this.hand = hand;
    }

    getMove() {
        return (this.hand) ? this.hand : "ur mom"
    }
}