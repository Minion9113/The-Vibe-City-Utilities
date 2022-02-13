const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_CHANNELS')) return;
        const channels = msg.guild.channels.cache.filter(ch => ch.type !== 'category');
        const role = msg.guild.roles.cache.find(r => r.name === 'member')
            channels.forEach(channel => {
                channel.updateOverwrite(role, {
                    SEND_MESSAGES: false
                })
                })

                var embed = new Discord.MessageEmbed()
                .setColor('0x05ff4c')
                .setDescription(`${msg.author}, I have succesfully locked all channels! 🔒\nUse the \`unlock\` command to unlock all previously locked channels.`)

                msg.channel.send(embed);
            }