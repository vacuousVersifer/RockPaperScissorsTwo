const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ClassicCommand extends Command {
  constructor(client) {
    super(client, {
      name: "classic",
      group: "rps",
      memberName: "classic",
      description: "Classic Rock Paper Scissors",
      guildOnly: true,
      ownerOnly: false,
      clientPermissions: [],
      userPermissions: [],
      throttling: { usages: 5, duration: 10 },
      args: [
        {
          key: "opponent",
          prompt: "Who you gonna challenge??",
          type: "user"
        }
      ]
    });
  }

  run(message, { opponent }) {
    let embed = new MessageEmbed()
    .setColor("#505050")
    .setTitle("Classic Rock Paper Scissors!")
    .setDescription(`<@${opponent.id}>, do you accept a game of classic rock paper scissors?`);

    message.say(`<@${opponent.id}>`, embed)
    .then(message => {
      message.react(":white_check_mark:")
    })
  }
};
