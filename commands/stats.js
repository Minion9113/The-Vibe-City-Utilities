const { MessageEmbed } = require("discord.js");
module.exports = {
name: "ainfo",
description: "`Show detailed stats of bot`",
category: "owner",
aliases: ["detail"],
run: async (client, message, args, level) => {
//command
  if(message.author.id != 424206236729344001){
    const noperms = new MessageEmbed()
    .setDescription(" <:No:888010623726784512> This command can only be use by my owner **Unbannable** ")
    .setColor("YELLOW");
    return message.channel.send(noperms)
  } 

let servers_count = message.client.guilds.cache.size;
var myarray = [];
message.client.guilds.cache.keyArray().forEach(async function(item, index) {

let guildMember = message.client.guilds.cache.get(item).memberCount;
myarray.push(guildMember)
})
let sum = myarray.reduce(function (a, b) {
return a + b
});

let totalSeconds = message.client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**The Vibe City**`)
  .setDescription(`Hey My name is **${message.client.user.username}** and My Work is to help **The Vibe City**`)

  .setTitle(`${message.client.user.username} Stats`)
  .addFields(
       { name: "<:servers:946055603799871519> Server Owner:",value: `\`\`\`Unbannable\`\`\``},
    { name: "<:users:946055995610775562> Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: "<:channels:946056319285211207> Channels:",value: `\`\`\`${message.client.channels.cache.size}\`\`\``, inline: true },
    { name: " <:uptime:946068640258748447> Uptime: ", value: uptime , inline: true },
    { name: " Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
    { name: "  RAM: ", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true  },
    { name: " Bot Owner:",value: `\`\`\`Unbannable\`\`\``},
  )
  .setColor("3498DB")  

return message.channel.send(embed);
    return message.react("<:Yes:888010591095119872>");
}
};

