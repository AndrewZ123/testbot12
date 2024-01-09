const Discord = require("discord.js");

module.exports = {
    name: "kick",
    run: async (client, message, args) => {
        // Check if the user has the necessary permissions to kick members
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Permission Denied")
                .setDescription(`<@${message.author.id}>, you don't have permission to kick members.`);
            return message.channel.send(embed);
        }

        // Check if a user was mentioned
        const memberToKick = message.mentions.members.first();
        if (!memberToKick) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Invalid Usage")
                .setDescription(`<@${message.author.id}>, please mention the user you want to kick.`);
            return message.channel.send(embed);
        }

        try {
            // Kick the mentioned user
            await memberToKick.kick("Kicked via command");

            // Success message
            const successMessage = new Discord.MessageEmbed()
                .setColor("#00ff00")
                .setDescription(`Successfully kicked ${memberToKick.user.tag}`);
            message.channel.send(successMessage);
        } catch (error) {
            console.error(error);

            // Error message
            const errorMessage = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setDescription("An error occurred while trying to kick the user.");
            message.channel.send(errorMessage);
        }
    }
};
