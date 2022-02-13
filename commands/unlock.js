const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_CHANNELS')) return;
        const channels = msg.guild.channels.cache.filter(ch => ch.type !== 'category');
        const role = msg.guild.roles.cache.find(r => r.name === 'Member')
            channels.forEach(channel => {
                channel.updateOverwrite(role, {
                    SEND_MESSAGES: true
                })
                })

                var embed = new Discord.MessageEmbed()
               .setColor('0x05ff4c')
                .setDescription(`${msg.author}, I have succesfully unlocked all previously locked channels. Feel free to speak in all channels now! 🔓`)

                msg.channel.send(embed);
            }