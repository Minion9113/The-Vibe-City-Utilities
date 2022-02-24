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
            .setDescription("The Commands of the bot!!")
            .setColor(0x3498db)
            .addField(
                              "FUN COMMANDS 🌟",

                              "Fun commands like  !meme and some games!"
                            )
          
                            .addField(
                              "!meme",

                              "With this command you can see a funny meme!"
                            )

                            .addField(
                              "!jumble",

                              "with this command you get a mixed word and you need to get it right!"
                            )

                            .addField(
                              "!rps",

                              "with this command you can play a round rock, paper, scissors"
                            )

                            .addField(
                              "!hangman",

                              "with this command you can play a round of hangman! (still in progress!)"
                            )
                            
                            .addField(
                              "!ttt",

                              "with this command you can play a round of tick tack toe"
                            )

                            .addField(
                              "!triggered",

                              "with this command you get a gif where you are triggered!"
                            )
                                              
                          ;

        message.channel.send(embed);
    }
}