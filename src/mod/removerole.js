const Discord = require("discord.js");

module.exports = {
    name: "removerole",
    run: async (client, message, args) => {
        // Check if the user has the necessary permissions to manage roles
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Permission Denied")
                .setDescription(`<@${message.author.id}>, you don't have permission to manage roles.`);
            return message.channel.send(embed);
        }

        // Check if a user was mentioned
        const memberToRemoveRole = message.mentions.members.first();
        if (!memberToRemoveRole) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Invalid Usage")
                .setDescription(`<@${message.author.id}>, please mention the user to remove a role.`);
            return message.channel.send(embed);
        }

        // Check if a role was mentioned
        const roleToRemove = message.mentions.roles.first();
        if (!roleToRemove) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Invalid Usage")
                .setDescription(`<@${message.author.id}>, please mention the role to remove.`);
            return message.channel.send(embed);
        }

        try {
            // Remove the role from the mentioned user
            await memberToRemoveRole.roles.remove(roleToRemove);

            // Success message
            const embed = new Discord.MessageEmbed()
                .setColor("#00ff00")
                .setTitle("Role Removed Successfully")
                .setDescription(`Successfully removed the role ${roleToRemove.name} from ${memberToRemoveRole.user.tag}`);
            message.channel.send(embed);
        } catch (error) {
            console.error(error);

            // Error message
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Error")
                .setDescription("An error occurred while trying to remove the role.");
            message.channel.send(embed);
        }
    }
};
