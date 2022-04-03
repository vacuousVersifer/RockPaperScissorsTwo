const { CommandoClient } = require("discord.js-commando");
const { TOKEN, commandPrefix, owner, invite, groups, commandPath } = require("./constants");

const client = new CommandoClient({ commandPrefix, owner, invite });

client.registry
  .registerDefaultTypes()
  .registerGroups(groups)
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(commandPath);

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`) ;
});

client.login(TOKEN);

module.exports = client;
