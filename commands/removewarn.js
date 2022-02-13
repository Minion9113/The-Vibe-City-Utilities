const warnModel = require("../models/warnModel");
const Discord = require("discord.js")
module.exports = {
    name: "remove-warn",
    description: "Remove a Warn using an id",
    run: async (client, message, args) => {
        let warnId = args[0];
        const data = await warnModel.findById(warnId);

        if (!data) return message.channel.send(`${warnId} is not a valid id!`);

        data.delete();

        const user = message.guild.members.cache.get(data.userId);

	var warnEmbed = new Discord.MessageEmbed()
		.setColor('0x05ff4c')
        .setDescription(`I have removed one of ${user} ´s warnings`)
        .setFooter('This message will auto-delete in 10 seconds.')
      var sendEm = await message.channel.send(warnEmbed);
       message.delete()
       setTimeout(() => {
       sendEm.delete()
        }, 10000);
    },
};
