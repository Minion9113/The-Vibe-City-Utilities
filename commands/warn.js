const warnModel = require("../models/warnModel");
const Discord = require("discord.js");
const MessageEmbed = require("discord.js");

module.exports = {
    name: "warn",
    description: "warn a user",
    run: async (client, message, args) => {
        const { member, mentions } = message;
        if (member.permissions.has("BAN_MEMBERS")) {
            const target =
                mentions.users.first() ||
                message.guild.members.cache.get(args[0]);
            let reason = args.slice(1).join(" ");

            if (!reason) reason = "**Reason not Provided**";
            if (!target)
                return message.channel.send("Please provide a user to warn!");

var logs = message.guild.channels.cache.find(c => c.name === 'logs');
    var verify = message.guild.emojis.cache.find(emoji => emoji.name === 'yes');
var targetID = message.guild.members.cache.get(target.id)
   var user = message.mentions.users.first() || msg.guild.members.cache.get(args[0]);

	var warnEmbed = new Discord.MessageEmbed()
		.setColor('0x05ff4c')
        .setDescription(` ${verify} ${user} has been warned succesfully by ${message.author}`)
        .setFooter('This message will auto-delete in 10 seconds.')
      var sendEm = await message.channel.send(warnEmbed);
       message.delete()
       setTimeout(() => {
       sendEm.delete()
        }, 10000);

         var log = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`${verify} <@${targetID.user.id}> has been warned by ${message.author}!`)
    logs.send(log);


            new warnModel({
                userId: target.id,
                guildId: message.guildId,
                moderatorId: message.author.id,
                reason,
                timestamp: Date.now(),
            }).save();

            await target.send(
                `You have been warned in ${message.guild.name} for ${reason}`
            );
        } else {
            message.channel.send(
                "You don't have permissions to use this command!"
            );
        }
    },
};
