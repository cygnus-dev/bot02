
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'joke') {
    var joke_list = ["homoeass", "humus", "js", "pytho god"];
    var joke = joke_list[Math.floor(Math.random() * joke_list.length)];  
    msg.reply(joke);
  }
});

client.on('message', msg => {
  const swearWords = ["cock", "shit", "fuck", "js", "gay", "minecraft", "ziad", "why", "piss", "british"];
  if( swearWords.some(word => msg.content.includes(word)))  {
    message.reply("ohno you said notok work!?!11!");
  }
})

client.on('message', msg =>{
  if (msg.content === 'monke') {
    msg.reply('monke!');
    }
});

client.on('message', msg => {
  if (msg.content === 'bottleflip') {
    var luck = Math.floor(Math.random()*(100-0+1)+0);
    if (luck > 15) {
      msg.reply('sory, botle died');
    } else {
      msg.reply('nice, botle is up')
    }
    
  }
})


client.login(process.env.DISCORDJS_TOKEN);