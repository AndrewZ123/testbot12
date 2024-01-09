const axios = require('axios');
const Discord = require("discord.js");

module.exports = {
    name: "dog",
    category: "info",
    description: "shows a pic of a dog",
    run: async (client, message, args) => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            const dogImageUrl = response.data.message;

            const embed = new Discord.MessageEmbed()
                .setColor(0x5126c7)
                .setTitle("Random Dog")
                .setImage(dogImageUrl);

            message.channel.send(embed);
        } catch (error) {
            console.error(error);
            message.channel.send("Error fetching dog image.");
        }
    }
};
