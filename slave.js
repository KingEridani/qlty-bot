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
    	message.reply('I can teach you about !weapons !movement !combatroles !buildtip !raidtypes');
  	}
});
//!weapons !movement !combatroles !buildtip !raidtypes

    client.on('message', message => {
    if (message.content === '!weapons') {
    	message.reply('there are several different types of weapons in the game. Each type of weapon is usually suited for one Combat Role but some may be versatile. You may say, !machineguns !shotguns !cannons !deployables !rockets !special');
  	}
});
     //!machineguns !shotguns !cannons !deployables !rockets !special
        
        client.on('message', message => {
    if (message.content === '!machineguns') {
    	message.reply('machine Guns are the all-rounder weapons, able to pick off weapons at range and viable in close-quarters, these weapons are meant for Front-Line and Flanker combat roles, but may sometimes be see on Support or Artillery weapons as a self defense mechanism. You may say !chord, !vector, !defender, !equilizer, !spectre, !aurora !reaper');
  	}
});
  //!chord, !vector, !defender, !equilizer, !spectre, !aurora !reaper'

client.login(process.env.BOT_TOKEN);
