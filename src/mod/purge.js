const Discord = require("discord.js");

module.exports = {
    name: "purge",
    run: async (client, message, args) => {
        // Check if the user has the necessary permissions to manage messages
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Permission Denied")
                .setDescription(`<@${message.author.id}>, you don't have permission to manage messages.`);
            return message.channel.send(embed);
        }

        // Check if a valid number of messages to purge is provided
        const numMessages = parseInt(args[0]);
        if (isNaN(numMessages) || numMessages <= 0) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Invalid Usage")
                .setDescription(`<@${message.author.id}>, please provide a valid number of messages to purge.`);
            return message.channel.send(embed);
        }

        try {
            // Purge the specified number of messages
            const messages = await message.channel.bulkDelete(numMessages, true);

            // Success message
            const embed = new Discord.MessageEmbed()
                .setColor("#00ff00")
                .setTitle("Chat Purged Successfully")
                .setDescription(`Successfully purged ${messages.size} messages.`);
            message.channel.send(embed);
        } catch (error) {
            console.error(error);

            // Error message
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Error")
                .setDescription("An error occurred while trying to purge messages.");
            message.channel.send(embed);
        }
    }
};
