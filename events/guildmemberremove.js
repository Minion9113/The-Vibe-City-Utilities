const client = require("../index");

client.on("guildMemberRemove", async (member) => {
    const channel = member.guild.channels.cache.find(
        (ch) => ch.id === "699012645201641544"
    );
    channel.send(`<@${member.id}> left us :(`)
});
