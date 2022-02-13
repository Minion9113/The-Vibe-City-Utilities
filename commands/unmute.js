const Discord = require('discord.js');
const ms = require('ms');

exports.run = async(client, msg, args) => {
var logs = msg.guild.channels.cache.find(c => c.name === 'logs');

    var verify = msg.guild.emojis.cache.find(emoji => emoji.name === 'yes');
    var target = msg.mentions.users.first() || msg.guild.members.chage.get(args[0]);
    if(!target) return msg.reply('You need to mention a user for me to unmute!')
    var targetID = msg.guild.members.cache.get(target.id)

      var log = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`${verify} <@${targetID.user.id}> has been unmuted by ${msg.author}!`)
    logs.send(log);
    
   var main = msg.guild.roles.cache.find(role => role.name === 'Member'); // Main role that you have
    var muteRole = msg.guild.roles.cache.find(role => role.name === 'muted');

    targetID.roles.remove(muteRole)
    targetID.roles.add(main)


          var confirmation = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`${verify} <@${targetID.user.id}> has been succesfully unmuted by ${msg.author}!`)
        msg.channel.send(confirmation);
}