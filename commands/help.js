const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "rules",
    description: "Shows the rules of the server!",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        embed = new MessageEmbed()
            .setTitle("Commands")
            .setDescription("The Commands of the server!")
            .setColor(0x3498db)
            .addField( "Moderation commands <a:Ban_Key:938753107356160051>",
                     
                    "To see the moderation commands type `!moderationcommands`")
          
          
          
          .addField( "Info Commands ℹ",

                    "To see the info commands type `!infocommands`"
)

                    
                            .addField(
                              "FUN COMMANDS 🌟",

                              "To see the fun commands type `!funcommands`"
                            )
                                              
      

        message.channel.send(embed);
    },
};
