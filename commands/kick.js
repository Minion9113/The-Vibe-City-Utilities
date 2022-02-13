const Discord = require("discord.js")

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('You do not have permissions to use this command!')

    var user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!user) return msg.reply('You did not mentions a user for me to punish!');
    try {
        member = await msg.guild.members.fetch(user)
    } catch(err) {
        member = null;
    }
    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot kick a staff member!');
    }

    var reason =args.splice(1).join(' ');
    if(!reason) return msg.reply('Please make sure to specifs a reason for me to punish this user!')
    var channel = msg.guild.channels.cache.find(c => c.name === 'ban-logs');
    var verify = msg.guild.emojis.cache.find(emoji => emoji.name === 'yes')
    var log = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`${verify} ${user} has been kicked by ${msg.author} for "**${reason}**"`)
    channel.send(log);

    var userlog = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`You have been kicked from **The Vibe City**! Here is the reason so that you do not repeat the same mistake: **${reason}** `)
    try {
        await user.send(userlog);
    } catch(err) {
        console.warn(err);
    }
    member.kick(reason)
    var confir = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`${verify} ${user} has been kicked by ${msg.author}`)
    msg.channel.send(confir);
    msg.delete();
}