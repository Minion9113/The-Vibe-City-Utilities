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
            .setDescription("The Commands of the bot!")
            .setColor(0x3498db)
            .addField( "Moderation commands <a:Ban_Key:938753107356160051>",
                     
                    "Moderation commands are only for staff!")
          
          
          
          .addField(
                "!addrole",

                "With this command an Admin can add a role to someone!"
            )
            .addField(
                "!removerole",

                "With this command an Admin can remove a role to someone!"
            )
            .addField(
                "!announce",

                "With this command can an Admin or the owner announce something!"
            )
            .addField(
                "!ban",

                "With this command staff members can ban a member!"
            )
            .addField(
                "!kick",

                "With this command staff members can kick a member!"
            )
            .addField(
                "!unban",

                "With this command a staff member can unban a member!"
            )
            .addField(
                "!mute",

                "With this command a staff member can mute a member!"
            )
            .addField(
                "!lock / unlock",

                "With this command an admin or the owner can lock the server!"
            )
          
            .addField(
                "!warn /removewarn",
                "With this command a staff member can warn a member or delete a warn from the member!."
            )
            .addField(
                "!warnings",
                "With this command staff members can see the warnings of a member!"
            )
            .addField(
                "!reply",

                "With this command can head Moderators or higher reply to a suggestion!"
            )
            .addField(
                "!test",

                "With this command the Owner (Unbannable) can test if his bot is still working!"
            )


          .addField(
            "!clear",

            "With this command staff members can clear messages!"
          )   

          .addField(

"!nick",        
            
   "With this command staff can change the nickname of a member!")  


           .addField(
 "!nickreset",
      

"With this command staff can delete the nickname of a user!")


           message.channel.send(embed);
    }
              }