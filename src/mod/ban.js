const Discord = require("discord.js");

module.exports = {
    name: "ban",
    run: async (client, message, args) => {
        // Check if the user has the necessary permissions to ban members
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Permission Denied")
                .setDescription(`<@${message.author.id}>, you don't have permission to ban members.`);
            return message.channel.send(embed);
        }

        // Check if a user was mentioned
        const memberToBan = message.mentions.members.first();
        if (!memberToBan) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Invalid Usage")
                .setDescription(`<@${message.author.id}>, please mention the user you want to ban.`);
            return message.channel.send(embed);
        }

        try {
            // Ban the mentioned user
            await memberToBan.ban({ reason: "Banned via command" });

            // Success message
            const embed = new Discord.MessageEmbed()
                .setColor("#00ff00")
                .setTitle("Ban Successful")
                .setDescription(`Successfully banned ${memberToBan.user.tag}`);
            message.channel.send(embed);
        } catch (error) {
            console.error(error);

            // Error message
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Error")
                .setDescription("An error occurred while trying to ban the user.");
            message.channel.send(embed);
        }
    }
};
