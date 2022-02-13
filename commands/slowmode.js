const Discord = require ('discord.js')
const { Client, Message, MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "slowmode",
    description: "sets a slowmode for a channel",
    UserPerms: ["MANAGE_MESSAGES"],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_CHANNELS"))
            return message.channel.send(
                "You don't have the permissions to use this command!"
            );

            var verify = message.guild.emojis.cache.find(emoji => emoji.name === 'yes');

        if (!args[0]) {
            message.channel.setRateLimitPerUser(0);
            var confirmation = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`${verify} The slowmode has been removed!`)
        message.channel.send(confirmation);
        }

        const raw = args[0];
        const milliseconds = ms(raw);

        if (isNaN(milliseconds))
            return message.reply("This is not a valid time!");

        if (milliseconds < 1000)
            return message.reply("The minimum slowmode is 1 second!");

        if (milliseconds > 21600000) return message.reply("The maximum is 6h!");
  

        message.channel.setRateLimitPerUser(milliseconds / 1000);
        var confirmation = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(` ${verify} The slowmode for this channel has been set to ${ms(milliseconds, {
                long: true,
            })}`)
        message.channel.send(confirmation);
        
    },
};
