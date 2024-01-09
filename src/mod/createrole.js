const Discord = require("discord.js");

module.exports = {
    name: "createrole",
    run: async (client, message, args) => {
        // Check if the user has the necessary permissions to create roles
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(`<@${message.author.id}>, you don't have permission to create roles.`);
        }

        // Combine arguments into a single string for role name
        const input = args.join(" ");
        const [roleName, colorInput] = input.split(",").map(part => part.trim());
        const roleColor = resolveColor(colorInput);

        // Check if role name and color are provided
        if (!roleName || !roleColor) {
            return message.channel.send(`<@${message.author.id}>, please provide both role name and color.`);
        }

        try {
            // Create the role
            const createdRole = await message.guild.roles.create({
                data: {
                    name: roleName,
                    color: roleColor,
                },
            });

            // Send a success message
            const successMessage = new Discord.MessageEmbed()
                .setColor(0x00ff00)
                .setDescription(`Role "${createdRole.name}" created successfully.`);

            message.channel.send(successMessage);
        } catch (error) {
            console.error(error);

            // Send an error message
            const errorMessage = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setDescription("An error occurred while trying to create the role.");
            
            message.channel.send(errorMessage);
        }
    }
};

// Function to resolve color names to hexadecimal
function resolveColor(colorInput) {
    const colors = {
        "dark blue": "#00008b",
        "light green": "#90ee90",
        // Add more color mappings as needed
    };

    return colors[colorInput.toLowerCase()] || colorInput;
}
