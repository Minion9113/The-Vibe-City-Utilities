const client = require("../index");

client.on("interactionCreate", async (interaction) => {
    // Context Menu Handling
    if (interaction.isContextMenu()) {
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
});
