 

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

client.on('message', msg =>{
    if(msg.content === 'monke') {
        msg.reply('monke!');
    }
});


client.login('NzYxNjI4MDY2MjA3NzYwNDI0.X3dXaQ.a-IyF7sSj8-LdFvWjb6ZK6I_jAI');