const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("NjA5Mzk5NjQ1Nzk3MzUxNDI1.XU2J3Q.PHfg4P6LCh1-FHOxx-AOaVaLI3k")
setInterval(function() {
channel.send(`twilight bank `);
}, 30)
})

client.login(process.env.BOT_TOKEN);