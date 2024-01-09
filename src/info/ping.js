module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message) => {
        if (!client) {
            return message.channel.send("Client not properly initialized.");
        }

        const ping = client.ws.ping;
        
        if (isNaN(ping)) {
            return message.channel.send("API response time not available.");
        }

        message.channel.send(`**API response time: ${Math.round(ping)}ms**`);
    }
};
