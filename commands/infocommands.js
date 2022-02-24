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
           .addField( "Info Commands ℹ",

                    "with this commands you can see infos about the server and many other things!"
)

                    .addField(
                      "!serverinfo",

                      "With this info everyone can get infos about the server!"
)
    
                     .addField(

"!botinfo",


   "With this command everyone csn see the infos about the bot"       
)
                      .addField(
                        "!Whois",

                        "With this command everyone can get infos about an other user or themself!"
)
                      
                        .addField(
                          "!rules",

                          "With this command everyone can read the rules!"
                          )
                        
                          .addField(
                            "!help",

                            "With this command everyone can get the commands of the bot!"
)
                          
                            .addField(
                              "!stats",

                              "With this command can the owner see stats of the bot!" 
                              
                            ) 
          
                            .addField(
                              "!ping",

                              "With this command everyone can see the ping in milliseconds!"
                            )

                            .addField(
                              "!translate",

                              "with this command you can translate everything to english"
                            )        
  message.channel.send(embed);
    },
}