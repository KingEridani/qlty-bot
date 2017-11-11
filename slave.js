const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Slave') {
    	message.reply('Did you call for me Master?');
  	}
});

client.on('message', message => {
    if (message.content === 'slave') {
    	message.reply('Did you call for me Master?');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('you may say, !guide, !time(WIP) !raids(WIP) !cw(WIP)');
  	}
});

client.on('message', message => {
    if (message.content === '!guide') {
    	message.reply('I can teach you about !weapons !movement !buildtip !raidtypes');
  	}
});

client.login(process.env.BOT_TOKEN);
