

require('dotenv').config();

const Discord = require('discord.js');
const { ping } = require('./commands/ping.js');
const client = new Discord.Client();
const {
    prefix,
    bot_info
} = require('./config.json');
// const filter = msg => msg.content.includes('discord');
// const collector = msg.channel.createMessageCollector(filter, { time: 15000 });
var swearWords = ["cock", "shit", "fuck", "js", "gay", "minecraft", "ziad", "why", "piss", "british"];

client.login(process.env.DISCORDJS_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === `${prefix}ping`) {
    msg.reply('pong');
  } else

  if (msg.content === 'joke') {
    var joke_list = ["homoeass", "humus", "js", "pytho god"];
    var joke = joke_list[Math.floor(Math.random() * joke_list.length)];  
    msg.reply(joke);
  } else
  
  if (swearWords.some(word => msg.content.includes(word)))  {
    msg.reply("ohno you said notok wordd!?!11!");
  } else
  
  if (msg.content === 'monke') {
    msg.reply('monke!');
  } else

  if (msg.content === 'bottleflip') {
    var luck = Math.floor(Math.random()*(100-0+1)+0);
    if (luck > 15) {
      msg.reply('sory, botle died');
    } else {
      msg.reply('nice, botle is up');
    }    
  } else

  if (msg.content === 'memes') {
    msg.channel.send('how mchuh?');
      const filter = m => m.author.id === msg.author.id
      const collector = msg.channel.createMessageCollector(filter, {max: 1, time: 15000 });
      collector.on('collect', msg => {
        console.log(msg.content);
      }); 
    }
});

