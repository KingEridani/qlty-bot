const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'fuck') {
    	message.reply('there there Master.');
  	}
});

client.on('message', message => {
    if (message.content === 'slave') {
    	message.reply('did you call for me Master?');
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
//!weapons- !movement !combatroles !buildtip !raidtypes

    client.on('message', message => {
    if (message.content === '!weapons') {
    	message.reply('there are several different types of weapons in the game. Each type of weapon is usually suited for one Combat Role but some may be versatile. You may say, !machineguns !shotguns !cannons !deployables !rockets !special');
  	}
});
     //!machineguns- !shotguns- !cannons- !deployables- !rockets- !melee !special
        
        client.on('message', message => {
    if (message.content === '!machineguns') {
    	message.reply('machine guns are all-rounder weapons, able to pick off weapons at range and viable in close-quarters, these weapons are meant for Front-Line and Flanker combat roles, but may sometimes be see on Support or Artillery weapons as a self defense mechanism. You may say !chord, !vector, !defender, !equilizer, !spectre, !aurora !reaper');
  	}
});
  //!chord, !vector, !defender, !equilizer, !spectre, !aurora !reaper'

        client.on('message', message => {
    if (message.content === '!shotguns') {
    	message.reply('shotguns are close-quarters weapons designed to tear off guns. Most commonly used in the Flanker combat role, may sometimes be found on Front-Line vehicles as well. You may say, !lupara, !sledgehammer, !frontmountedone !purpleone !hammerfell');
  	}
});
  //!lupara, !sledgehammer, !frontmountedone !purpleone !Hammerfell

        client.on('message', message => {
    if (message.content === '!cannons') {
    	message.reply('cannons are the "nukes" of the game. come in two variety, with one special exception. There are front-mounted cannons and turreted or dorsal-mounted cannons. These are the bread-and-butter weapons of the Heavy-Hitter role. You may say, !avenger, !judge, !littleboy, !executioner, !fatman, !quasar, !tsunami, !mammoth');
  	}
});
  //!avenger, !judge, !littleboy, !executioner, !fatman, !quasar, !tsunami, !mammoth

 client.on('message', message => {
    if (message.content === '!deployables') {
    	message.reply('deployables are the most mobile of weapons, allowing for greater kiting than any other option. They come in three types, Fly Drones, Turrets, and Buggy Drones. When taken exclusively these weapons are found on Supports and Flankers, but can often be found mixed into any build. You may say, !falcon, !owl, !cobra, !purpleturret, !sidekick');
  	}
});
  //!falcon, !owl, !cobra, !purpleturret, !sidekick

 client.on('message', message => {
    if (message.content === '!rockets') {
    	message.reply('rockets are similar to cannons in function, but much dicier. They come in two types, unguided or guided. They are most often found on Heavy-Hitter and Artillery vehicles. You can say, !wasp, !tow, !cricket, !pyre, !hurricane');
  	}
});
  //!wasp, !tow, !cricket, !pyre, !hurricane

 client.on('message', message => {
    if (message.content === '!melee') {
    	message.reply('melee weapons are unique low-energy weapons that deal damage by maintaining contact with the enemy. While they do ram melee damage akin to the structure melee parts, it is not a wise idea to use them for high-speed rams as they still recieve damage from it. Most commonly seen on Flankers and Front-Liners. You may say, !buzzsaw, !augar, !prox, !druzbha, !lance, !grinder');
  	}
});
//!buzzsaw, !augar, !prox, !druzbha, !lance, !grinder

 client.on('message', message => {
    if (message.content === '!special') {
    	message.reply('special weapons range in purpose, energy, role and type. Check out each one for its specific roles. You may say, !spark, !overheadthingy, !caucus, !firebug, !porcupine. !scorpion');
  	}
});
  //!spark, !overheadthingy, !caucus, !firebug, !porcupine. !scorpion'

 client.on('message', message => {
    if (message.content === '!') {
    	message.reply('');
  	}
});
  //!

 client.on('message', message => {
    if (message.content === '!') {
    	message.reply('');
  	}
});
  //!

 client.on('message', message => {
    if (message.content === '!') {
    	message.reply('');
  	}
});
  //!

 client.on('message', message => {
    if (message.content === '!') {
    	message.reply('');
  	}
});
  //!

 client.on('message', message => {
    if (message.content === '!') {
    	message.reply('');
  	}
});
  //!

client.login(process.env.BOT_TOKEN);
