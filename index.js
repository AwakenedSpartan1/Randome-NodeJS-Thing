const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
  token: "token_here",
  prefix: "prefix_here",
  intents: ["MessageContent", "Guilds", "GuildMessages"]
});

// Events, required for the bot to read and send messages.
bot.onMessage();

// Ping Command Example
bot.command({
  name: "ping",
  code: `Pong! $pingms`
});

// Slash Interaction Command Example (ping)
/* You must execute the function below for the slash command to work:
$createApplicationCommand[$guildID;ping;Pong!;true;slash]
*/
bot.interactionCommand({
  name: "ping",
  prototype: "slash",
  code: `$interactionReply[Pong! $pingms;;;;everyone]`
});