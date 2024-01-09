const Discord = require("discord.js");
const axios = require('axios');

module.exports = {
    name: "cat",
    category: "info",
    description: "shows a pic of a cat",
    run: async (client, message, args) => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            const catImageUrl = response.data[0].url;

            const embed = new Discord.MessageEmbed()
                .setColor(0x5126c7)
                .setTitle("Random Cat")
                .setImage(catImageUrl);
            message.channel.send(embed);
        } catch (error) {
            console.error(error);
            message.channel.send("Error fetching cat image.");
        }
    }
};
