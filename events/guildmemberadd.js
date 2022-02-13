const client = require("../index");
const Canvas = require("canvas");
const path = require("path");
const Discord = require("discord.js");

client.on("guildMemberAdd", async (member) => {
    const channel = member.guild.channels.cache.find(
        (ch) => ch.id === "699012645201641544"
    );
    if (!channel) return;
    const description = {
        name: "WelcomeImages",
        filename: "welcome.js",
        version: "4.8",
    };
    //log that the module is loaded
    console.log(
        ` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`
    );

    //create a new Canvas
    const canvas = Canvas.createCanvas(1100, 500);
    //make it "2D"
    const ctx = canvas.getContext("2d");
    //set the Background to the welcome.png
    const background = await Canvas.loadImage(
        path.resolve(__dirname, "../media/card.png")
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#f2f2f2";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    //set the first text string
    var textString3 = `${member.user.username}`;
    //if the text is too big then smaller the text
    if (textString3.length >= 8) {
        ctx.font = '50px "Product Sans"';
        ctx.fillStyle = "#f2f2f2";
        ctx.fillText(textString3, 415, canvas.height / 2 + 35);
    }
    //else dont do it
    else {
        ctx.font = '75px "Product Sans"';
        ctx.fillStyle = "#f2f2f2";
        ctx.fillText(textString3, 415, canvas.height / 2 + 35);
    }
    //define the Member count
    var textString4 = `Member #${member.guild.memberCount}`;
    ctx.font = '48px "Product Sans"';
    ctx.fillStyle = "#f2f2f2";
    ctx.fillText(textString4, 450, canvas.height / 2 + 125);
    //get the Guild Name
    var textString4 = `Welcome to ${member.guild.name}`;
    ctx.font = '48px "Beauty Bright Personal Use"';
    ctx.fillStyle = "#f2f2f2";
    ctx.fillText(textString4, 400, canvas.height / 2 - 75);
    //create a circular "mask"
    ctx.beginPath();
    ctx.arc(265, canvas.height / 2, 132, 0, Math.PI * 2, true); //position of img
    ctx.closePath();
    ctx.clip();
    //define the user avatar
    const avatar = await Canvas.loadImage(
        member.user.displayAvatarURL({ format: "jpg" })
    );
    //draw the avatar
    ctx.drawImage(avatar, 132, canvas.height / 2 - 132.5, 264, 264);
    //get it as a discord attachment
    const attachment = new Discord.MessageAttachment(
        canvas.toBuffer(),
        "welcome-image.png"
    );
    //define the welcome embed
    const welcomeembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("Welcome", member.guild.iconURL({ dynamic: true }))
        .setDescription(
            `**Welcome to ${member.guild.name}!**
      Hi <@${member.id}>!, read and accept the rules!`
        )
        .setImage("attachment://welcome-image.png");
        
    //send the welcome embed to there
    channel.send({ embeds: [welcomeembed], files: [attachment] });
    //member roles add on welcome every single role
    // let roles = config.ROLES_WELCOME;
    // for (let i = 0; i < roles.length; i++) member.roles.add(roles[i]);
});
