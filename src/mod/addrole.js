const Discord = require("discord.js");

module.exports = {
    name: "addrole",
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
        const memberToAddRole = message.mentions.members.first();
        if (!memberToAddRole) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Invalid Usage")
                .setDescription(`<@${message.author.id}>, please mention the user to add a role.`);
            return message.channel.send(embed);
        }

        // Check if a role was mentioned
        const roleToAdd = message.mentions.roles.first();
        if (!roleToAdd) {
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Invalid Usage")
                .setDescription(`<@${message.author.id}>, please mention the role to add.`);
            return message.channel.send(embed);
        }

        try {
            // Add the role to the mentioned user
            await memberToAddRole.roles.add(roleToAdd);

            // Success message
            const embed = new Discord.MessageEmbed()
                .setColor("#00ff00")
                .setTitle("Role Added Successfully")
                .setDescription(`Successfully added the role ${roleToAdd.name} to ${memberToAddRole.user.tag}`);
            message.channel.send(embed);
        } catch (error) {
            console.error(error);

            // Error message
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Error")
                .setDescription("An error occurred while trying to add the role.");
            message.channel.send(embed);
        }
    }
};
