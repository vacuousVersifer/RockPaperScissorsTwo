const ROCK = "Rock";
const GUN = "Gun";
const LIGHTNING = "Lightning";
const DEVIL = "Devil";
const DRAGON = "Dragon";
const WATER = "Water";
const AIR = "Air";
const PAPER = "Paper";
const SPONGE = "Sponge";
const WOLF = "Wolf";
const TREE = "Tree";
const HUMAN = "Human";
const SNAKE = "Snake";
const SCISSORS = "Scissors";
const FIRE = "Fire";

const Options = [ROCK, GUN, LIGHTNING, DEVIL, DRAGON, WATER, AIR, PAPER, SPONGE, WOLF, TREE, HUMAN, SNAKE, SCISSORS, FIRE];

// ["killer", "killed"]

const Interactions = [
  // ROCK
  [ROCK, FIRE],
  [ROCK, SCISSORS],
  [ROCK, SNAKE],
  [ROCK, HUMAN],
  [ROCK, TREE],
  [ROCK, WOLF],
  [ROCK, SPONGE],

  // FIRE
  [FIRE, SCISSORS],
  [FIRE, SNAKE],
  [FIRE, HUMAN],
  [FIRE, TREE],
  [FIRE, WOLF],
  [FIRE, SPONGE],
  [FIRE, PAPER],

  // SCISSORS
  [SCISSORS, SNAKE],
  [SCISSORS, HUMAN],
  [SCISSORS, TREE],
  [SCISSORS, WOLF],
  [SCISSORS, SPONGE],
  [SCISSORS, PAPER],
  [SCISSORS, AIR],

  // SNAKE
  [SNAKE, HUMAN],
  [SNAKE, TREE],
  [SNAKE, WOLF],
  [SNAKE, SPONGE],
  [SNAKE, PAPER],
  [SNAKE, AIR],
  [SNAKE, WATER],

  // HUMAN
  [HUMAN, TREE],
  [HUMAN, WOLF],
  [HUMAN, SPONGE],
  [HUMAN, PAPER],
  [HUMAN, AIR],
  [HUMAN, WATER],
  [HUMAN, DRAGON],

  // TREE
  [TREE, WOLF],
  [TREE, SPONGE],
  [TREE, PAPER],
  [TREE, AIR],
  [TREE, WATER],
  [TREE, DRAGON],
  [TREE, DEVIL],

  // WOLF
  [WOLF, SPONGE],
  [WOLF, PAPER],
  [WOLF, AIR],
  [WOLF, WATER],
  [WOLF, DRAGON],
  [WOLF, DEVIL],
  [WOLF, LIGHTNING],

  // SPONGE
  [SPONGE, PAPER],
  [SPONGE, AIR],
  [SPONGE, WATER],
  [SPONGE, DRAGON],
  [SPONGE, DEVIL],
  [SPONGE, LIGHTNING],
  [SPONGE, GUN],

  // PAPER
  [PAPER, AIR],
  [PAPER, WATER],
  [PAPER, DRAGON],
  [PAPER, DEVIL],
  [PAPER, LIGHTNING],
  [PAPER, GUN],
  [PAPER, ROCK],

  // AIR
  [AIR, WATER],
  [AIR, DRAGON],
  [AIR, DEVIL],
  [AIR, LIGHTNING],
  [AIR, GUN],
  [AIR, ROCK],
  [AIR, FIRE],

  // WATER
  [WATER, DRAGON],
  [WATER, DEVIL],
  [WATER, LIGHTNING],
  [WATER, GUN],
  [WATER, ROCK],
  [WATER, FIRE],
  [WATER, SCISSORS],

  // DRAGON
  [DRAGON, DEVIL],
  [DRAGON, LIGHTNING],
  [DRAGON, GUN],
  [DRAGON, ROCK],
  [DRAGON, FIRE],
  [DRAGON, SCISSORS],
  [DRAGON, SNAKE],

  // DEVIL
  [DEVIL, LIGHTNING],
  [DEVIL, GUN],
  [DEVIL, ROCK],
  [DEVIL, FIRE],
  [DEVIL, SCISSORS],
  [DEVIL, SNAKE],
  [DEVIL, HUMAN],

  // LIGHTNING
  [LIGHTNING, GUN],
  [LIGHTNING, ROCK],
  [LIGHTNING, FIRE],
  [LIGHTNING, SCISSORS],
  [LIGHTNING, SNAKE],
  [LIGHTNING, HUMAN],
  [LIGHTNING, TREE],

  // GUN
  [GUN, ROCK],
  [GUN, FIRE],
  [GUN, SCISSORS],
  [GUN, SNAKE],
  [GUN, HUMAN],
  [GUN, TREE],
  [GUN, WOLF],
];

module.exports = { Options, Interactions };
