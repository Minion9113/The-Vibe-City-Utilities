const config = require('./config.json');
const Discord = require('discord.js')
const ms = require('ms');
const client = new Discord.Client();
const Fs = require('fs')
const bot = require("discord.js")
const db = require('quick.db')
const mongoose = require("mongoose");
const Client = new Discord.Client({disableEveryone: true});
const message = require ("discord.js")
const MessageEmbed = require ("discord.js")
const newMessageEmbed = require("discord.js")
client.on('ready',  async() => {
    console.log('I am online and ready to listen to commands!')
    
})


client.on('message', async(msg) => {

    if(msg.author.bot) return;
    if(!msg.guild) return;
    if(msg.content.length >= 1500) {
    msg.delete();
   return msg.channel.send(`${msg.author} , you are not allowed to send unnecessarily long and annoying messages in this server!`)
     
    }

    if(msg.content === "!verify" && msg.channel.id === "934052927616737280") {
        msg.delete()
        const verified = msg.guild.roles.cache.find(r => r.name === "Member")
        msg.member.roles.add(verified)
    }

if(msg.mentions.users.size > 2 && !msg.member.hasPermission('BYPASS PERMISSION GOES HERE') && !msg.channel.id === 'BYPASS CHANNEL ID GOES HERE') {

msg.delete()
return msg.reply('you cannot mass mention users in this server!')

}
//ANTI LINE SPAM
try {
var lineArray = msg.content.match(/\n/g);
var number = lineArray.length

if(number >= 50) {
    msg.delete()
    return msg.reply('you cannot line spam in this server!')
    
}
}catch(err) {


}
 

    var array = ['bitch' , 'fuck', 'shut up' , 'hurensohn', 'Motherfucker' , 'dont care'];
 
        if(array.some(w =>  ` ${msg.content.toLowerCase()} `.includes(` ${w} `))){


            msg.delete()
            msg.reply(`this server does not tolerate that kind of language! Continuing will result in a mute!`)

            var warnsJSON = JSON.parse(Fs.readFileSync('./warnInfo.json'))
            

            if(!warnsJSON[msg.author.id]) {
                warnsJSON[msg.author.id] = {
                    warns: 0
                }

                Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
            }

            warnsJSON[msg.author.id].warns += 1
            Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))


            setTimeout(function() {

                warnsJSON[msg.author.id].warns -= 1
                Fs.writeFileSync('./warnInfo.json' , JSON.stringify(warnsJSON))
            }, ms('24h'))

            var warnEm = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle(`You have been warned in ${msg.guild.name}`)
            .setDescription('You have recieved a warning from the moderation system')
            .addField('Reason' , '[AutoMod] Using filtered words')
            .addField('Expires' , '24h')

            try {
                msg.author.send(warnEm)

            } catch(err) {

            }


            if(Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
                var mutedEm = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`**${msg.member.user.username}** has been muted for continuous infractions`)
                msg.channel.send(mutedEm)

                const muteRole = msg.guild.roles.cache.find(r => r.name === 'Muted')
                const user = msg.member
                user.roles.add(muteRole.id)

                var yougotmuted = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`You have been muted in ${msg.guild.name}`)
                .setDescription('You have been muted after 3 infractions')
                .addField('Reason' , 'Multiple AutoMod Infractions')
                .addField('Expires' , '2h')

                try {

                    msg.author.send(yougotmuted)

                }catch(err) {

                }

                setTimeout(function () {
                    user.roles.remove(muteRole.id)
                }, ms('2h'));
			
            }
        return;
        }
            
        
        
    
    var prefix = config.prefix;
    if(!msg.content.toLowerCase().startsWith(prefix)) return;
 
    var args = msg.content.split(' ')
    var cmd = args.shift().slice(prefix.length).toLowerCase();
    try {
        var file = require(`./commands/${cmd}.js`);
        file.run(client, msg, args);
 
    }catch(err) {
        console.warn(err);
    }
 
})


client.on('guildMemberAdd', async(member) => { // this event gets triggered when a new member joins the server!
    // Firstly we need to define a channel
    // either using .get or .find, in this case im going to use .get()
    const Channel = member.guild.channels.cache.get('699012645201641544') //insert channel id that you want to send to
    //making embed
    const embed = new Discord.MessageEmbed()
        .setTitle('New Member')
        .setDescription(`**${member.displayName}** welcome to **${member.guild.name}**, we now have **${member.guild.memberCount} members!**`)
  .setColor('RED')
    // sends a message to the channel
    Channel.send(embed)
})
client.on('guildMemberRemove', async(member) => { // this event gets triggered when a new member leaves the server!
    // Firstly we need to define a channel
    // either using .get or .find, in this case im going to use .get()
    const Channel = member.guild.channels.cache.get('699012645201641544') //insert channel id that you want to send to
    //making embed
    const embed = new Discord.MessageEmbed()
        .setTitle('A member left the server :(')
        .setDescription(`**${member.displayName}** has left** ${member.guild.name}**, we now have **${member.guild.memberCount} members!**`)
  .setColor('RED')
  // sends a message to the channel
     
    const addRole = member.guild.roles.cache.find(r => r.name === 'Member')
    member.roles.add(addRole)
    })
     
   
    // mongoose
    const mongooseConnectionString = process.env.mongooseConnectionString;
    if (!mongooseConnectionString) return;

    mongoose
        .connect(mongooseConnectionString)
        .then(() => console.log("Connected to mongodb"));

const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;

client.on('message', async(message) => {
    if(message.author.bot) return;
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {
                let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
                if(!muterole) {
                    try{
                        muterole = await message.guild.roles.create({
                            name : "Muted",
                            permissions: []
                        })
                        message.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(muterole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                    }catch (e) {
                        console.log(e)
                    }
                }
                message.member.roles.add(muterole);
                message.channel.send('You have been muted for Spamming!');
                setTimeout(() => {
                    message.member.roles.remove(muterole);
                    message.channel.send('You have been unmuted!')
                }, TIME);
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
})


        client.login(config.token)