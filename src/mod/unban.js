const Discord = require("discord.js");

module.exports = {
    name: "unban",
    run: async (client, message, args) => {
        // Check if the user has the necessary permissions to unban members
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Permission Denied")
                .setDescription("You don't have permission to unban members.");
            return message.channel.send(embed);
        }

        // Check if an ID was provided
        const userId = args[0];
        if (!userId || isNaN(userId)) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Invalid Usage")
                .setDescription("Please provide the ID of the user you want to unban.");
            return message.channel.send(embed);
        }

        try {
            // Unban the user
            await message.guild.members.unban(userId);

            // Success message
            const embed = new Discord.MessageEmbed()
                .setColor("#00ff00")
                .setTitle("Unban Successful")
                .setDescription(`Successfully unbanned user with ID ${userId}`);
            return message.channel.send(embed);
        } catch (error) {
            console.error(error);

            // Error message
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Error")
                .setDescription(`An error occurred while trying to unban the user. ${error.message || ""}`);
            return message.channel.send(embed);
        }
    }
};
