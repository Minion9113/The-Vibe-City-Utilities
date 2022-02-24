client.on('message', message => {
    if (message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    const text = args.join(' ');


    if (command === 'status') { 
        if (!args.length) {
            return message.channel.send(`Please tell the bot what to say, ${message.author}`);
        }
    
        client.user.setActivity(text, { //write msg here
            type: "WATCHING", //LISTENING or PLAYING
            name: "itt"
        });
        message.channel.send('Changed status to ' + text)
    }
});
