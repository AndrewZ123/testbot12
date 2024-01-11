const Discord = require("discord.js");
module.exports = {
    name: "help",
    run: (client, message) => {
        const embed0 = new Discord.MessageEmbed()
            .setTitle("Prefix: `!`")
            .setAuthor(`ZBot Help Guide`)
            .setColor(0x5126c7)
            .setThumbnail(`/Users/andrewzompa/gambit-discord-bot/Dark Blue Purple White Tactical Gaming Discord Logo.png`)
            .setDescription(`Hello <@${message.author.id}>, please familiarize yourself with this bot by reading over this embed!\n\n`)
            .setImage(`/Users/andrewzompa/gambit-discord-bot/Dark Blue Purple White Tactical Gaming Discord Logo (Medium Banner (US) (Landscape)).png`)
            .addField("**Information Commands**", "ℹ️", false)
            .addField("**Fun Commands**", "🎉", false)
            .addField("**Moderation Commands**", "📈", false)
            .addField("**Home**", "🏠", false)
            .setTimestamp()
        message.channel.send(embed0).then(m => {
            m.react("ℹ️")
            m.react("🎉")
            m.react("📈")
            m.react("🏠")


            const filter0 = (reaction, user) => reaction.emoji.name === "🏠" && user.id === message.author.id;
            const collector0 = m.createReactionCollector(filter0, { max: 9, time: 5 * 60 * 1000 });

            collector0.on('collect', () => {

                const embed = new Discord.MessageEmbed()
                    .setTitle("Prefix: `!`")
                    .setAuthor(`ZBot Help Guide`)
                    .setColor(0x5126c7)
                    .setThumbnail(`/Users/andrewzompa/gambit-discord-bot/Dark Blue Purple White Tactical Gaming Discord Logo.png`)
                    .setDescription(`Hello <@${message.author.id}>, please familiarize yourself with this bot by reading over this embed!\n\n`)
                    .setImage(`/Users/andrewzompa/gambit-discord-bot/Dark Blue Purple White Tactical Gaming Discord Logo (Medium Banner (US) (Landscape)).png`)
                    .addField("**Information Commands**", "ℹ️", false)
                    .addField("**Fun Commands**", "🎉", false)
                    .addField("**Moderation Commands**", "📈", false)
                    .addField("**Home**", "🏠", false)
                    .setTimestamp()
                m.edit(embed).then(m => {
                    m.reactions.resolve("🏠").users.remove(message.author.id);
                })
            });


            const filter = (reaction, user) => reaction.emoji.name === "ℹ️" && user.id === message.author.id;
            const collector = m.createReactionCollector(filter, { max: 9, time: 5 * 60 * 1000 });

            collector.on('collect', () => {

                const embed = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .addField("**Crypto Conversion**", "`!crypto <crypto> <real currency>`")
                    .addField("**Fee Calculator**", "`!fee <your selling price>s`")
                    .addField("**Ping**", "`!ping`")
                    .addField("**Server Information**", "`!serverinfo`")
                    .addField("**Who Is?**", "`!whois`")
                    .addField("**Catchall Generator**", "`!catchall <domain>`")
                    .addField("**Member Count**", "`!membercount`")
                    .addField("**Invites Leaderboard (Top 5)**", "`!invites`")
                    .addField("**Quote a User**", "`!quote <channel id> <message id>`")
                    .addField("**Make a Suggestion**", "`!suggest <suggestion>`")
                m.edit(embed).then(m => {
                    m.reactions.resolve("ℹ️").users.remove(message.author.id);
                })
            });

            const filter1 = (reaction, user) => reaction.emoji.name === "🎉" && user.id === message.author.id;
            const collector1 = m.createReactionCollector(filter1, { max: 9, time: 5 * 60 * 1000 })

            collector1.on('collect', () => {
                const embed1 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .addField("**8Ball**", "`!8ball <your question>`")
                    .addField("**Avatar**", "`!av` or `.av @<user>`")
                    .addField("**Calculator**", "`!math <your math equation here>`")
                    .addField("**Cat Pictures**", "`!cat`")
                    .addField("**Coin Flip**", "`!coinflip`")
                    .addField("**Dice Roll**", "`!dice`")
                    .addField("**Dog Pictures**", "`!dog`")
                    .addField("**Rock Paper Scissors**", "`!rps`")
                    .addField("**Blackjack**", "`!blackjack`")
                    .addField("**Rate Anything**", "`!rate <anything>`")
                    .addField("**ISS Information**", "`!iss`")
                m.edit(embed1).then(m => {
                    m.reactions.resolve("🎉").users.remove(message.author.id);
                })
            });

             const filter2 = (reaction, user) => reaction.emoji.name === "📈" && user.id === message.author.id;
             const collector2 = m.createReactionCollector(filter2, { max: 9, time: 5 * 60 * 1000 });

             collector2.on('collect', () => {

                 const embed2 = new Discord.MessageEmbed()
                     .setColor(0x5126c7)
                    .addField("**Add Role**", "`!addrole <user> <role>`")
                    .addField("**Ban**", "`!ban <user>`")
                    .addField("**Purge Chat**", "`!purge <number of messages>`")
                    .addField("**Kick**", "`.kick <user>`")
                    .addField("**Remove Role**", "`!removerole <user> <role>`")
                   .addField("**Change Bot Nickname**", "`!setbotnick <new nickname>`")
                   .addField("Change User Nickname", "`!nickname <@user> <new nickname>`")
               m.edit(embed2).then(m => {
                    m.reactions.resolve("📈").users.remove(message.author.id);
               })
             });
            
            

        })
    }
};
