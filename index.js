const Discord = require("discord.js")
const { Intents } = require("discord.js")
let config = require('./config.json')
const client = new Discord.Client({
	intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]
})
client.login(config.token)

client.on('ready', async() => {
	console.log("Quoi?")
})
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
client.on("messageCreate", async message => {
	if(!message.content || message.channel.type === "dm") return;
	let str = message.content;
    str = str.replace(/[^\w\s]|_/g, "")
    str = str.replace(/\s+/g, " ");
    let lastMessage = str.split(" ")
    
    if(lastMessage[lastMessage.length - 1] === "") {
    	lastMessage = lastMessage[lastMessage.length - 2]
    } else {
    	lastMessage = lastMessage[lastMessage.length - 1]
    }
    if(!lastMessage) return;
    if(lastMessage.toString().toLowerCase() === "quoi" || lastMessage.toString().toLowerCase() === "koi") {
        var value = getRandomInt(100)
        if(value <= config.probability) {
            message.reply("feur")           
        }

    }
})