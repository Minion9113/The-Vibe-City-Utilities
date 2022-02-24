const { Client, Message, MessageEmbed } = require("discord.js");

console.log(`Rules cmd -- Has Loaded ✅`)

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
            .setTitle("Rules")
            .setDescription("The rules of the server!")
            .setColor(0x3498db)
            .addField(
                "1. Follow Discord's TOS",

                "> https://discordapp.com/terms\n > https://discordapp.com/guidelines"
            )
            .addField(
                "2. Be Respectful with all members",

                "> Be respectful to others , No death threats, sexism, hate speech, racism (NO N WORD, this includes soft N)\n > No doxxing, swatting, witch hunting"
            )
            .addField(
                "3. No Advertising",

                "> Includes DM Advertising. We do not allow advertising here of any kind.\n > Advertising is only allowed in <#886894116624023552>"
            )
            .addField(
                "4. No NSFW Content",

                "> Anything involving gore or sexual content is not allowed.\n > NSFW = Not Safe for Work"
            )
            .addField(
                "5. No Spamming in Text or VC",

                "> Do not spam messages, soundboards, voice changers, or earrape in any channel."
            )
            .addField(
                "6. Do Not Discuss About Sensitive Topics",

                "> This isn't a debating server, keep sensitive topics out of here so we don't have a ton of nasty arguments."
            )
            .addField(
                "7. No Malicious Content",

                "> No grabify links, viruses, crash videos, links to viruses, or token grabbers. These will result in an automated ban."
            )
            .addField(
                "8. No Self Bots",

                "> Includes all kinds of selfbots: Nitro snipers, selfbots like nighty, auto changing statuses"
            )
            .addField(
                "9. No Not DM the Staff",
                "> Please open a ticket instead in <#885984055999479838>"
            )
            .addField(
                "10. Profile Picture / Banner Rules",
                "> No NSFW allowed\n > No racism\n > No brightly flashing pictures to induce an epileptic attack"
            )
            .addField(
                "11. Emoji Rules",

                "> No NSFW allowed\n > No racism\n > No brightly flashing pictures to induce an epileptic attack"
            )
            .addField(
                "12. Use English and German Only",

                "> We cannot easily moderate chats in different languages, sorry. English and German only."
            );

        message.channel.send(embed);
    },
};
