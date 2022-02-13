const Discord = require("discord.js")

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You do not have permissions to use this command!')

    var user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!user) return msg.reply('You did not mentions a user for me to punish!');
    try {
        member = await msg.guild.members.fetch(user)
    } catch(err) {
        member = null;
    }
    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot ban a staff member!');
    }

    var reason =args.splice(1).join(' ');
    if(!reason) return msg.reply('Please make sure to specifs a reason for me to punish this user!')
    var channel = msg.guild.channels.cache.find(c => c.name === 'ban-logs');
    var verify = msg.guild.emojis.cache.find(emoji => emoji.name === 'yes')
    var log = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`${verify} ${user} has been banned by ${msg.author} for "**${reason}**"`)
    channel.send(log);

    var userlog = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`You have been banned from **The Vibe City**! You can appeal for the ban by messaging Unbannable#7208!`)
    try {
        await user.send(userlog);
    } catch(err) {
        console.warn(err);
    }
    msg.guild.members.ban(user);
    var confir = new Discord.MessageEmbed()
    .setColor('0x05ff4c')
    .setDescription(`${verify} ${user} has been banned by ${msg.author}`)
    msg.channel.send(confir);
    msg.delete();
}