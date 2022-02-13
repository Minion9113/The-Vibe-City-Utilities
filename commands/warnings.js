const warnModel = require("../models/warnModel");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const Discord = require("discord.js")
module.exports = {
    name: "warnings",
    description: "display all warnings that a user has",
    run: async (client, message, args) => {
        const target =
            message.mentions.users.first() ||
            message.guild.members.cache.get(args[0]);

        if (!target)
            return message.channel.send("Please provide a user to warn!");

        const userWarnings = await warnModel.find({
            userId: target.id,
            guildId: message.guildId,
        });

        if (!userWarnings.length)
	var warnEmbed = new Discord.MessageEmbed()
		.setColor('0x05ff4c')
        .setDescription(` ${target} has no warnings`)
        .setFooter('This message will auto-delete in 10 seconds.')
      var sendEm = await message.channel.send(warnEmbed);
       message.delete()
       setTimeout(() => {
       sendEm.delete()
        }, 10000);

        const embedDescription = userWarnings
            .map((warn) => {
                const moderator = message.guild.members.cache.get(
                    warn.moderatorId
                );

                timestamp = warn.timestamp;
                return [
                    `warnId: ${warn._id}`,
                    `Moderator: ${moderator || "Has left"}`,
                    `Date: ${moment(timestamp).format("MMM Do YYYY")}`,
                    `Reason : ${warn.reason}`,
                ].join("\n");
            })
            .join("\n\n");

        const embed = new MessageEmbed()
            .setTitle(`${target.tag}'s total warnings`)
            .setDescription(embedDescription)
            .setColor("RANDOM");
      var sendEm = await message.channel.send(embed);
    },
};
