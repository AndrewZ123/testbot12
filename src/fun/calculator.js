const math = require("math-expression-evaluator");
const Discord = require("discord.js");

module.exports = {
    name: "calculate",
    run: (client, message, args) => {
        if (args.length < 1) return message.channel.send("Please input an equation");

        const q = args.join(" ");

        let answer;
        try {
            answer = math.eval(q);
        } catch (err) {
            return message.channel.send("Invalid equation");
        }

        // Add parentheses to message.delete
        message.delete();

        const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setTitle("🧮 Calculator")
            .addField(`Equation: ${q}`, `Answer: ${answer || "Invalid equation"}`);
        message.channel.send(embed);
    }
};
