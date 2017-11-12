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
    	message.reply('you may say, !guide, !raids(WIP), !cw(WIP)');
  	}
});

client.on('message', message => {
    if (message.content === '!guide') {
    	message.reply('I can teach you about !weapons !movement !combatroles !buildtip(WIP) !raidtypes, !brawltypes');
  	}
});
//!weapons- !movement- !combatroles- !buildtip(WIP) !raidtypes !brawltypes

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
    if (message.content === '!movement') {
    	message.reply('There are three kinds of movement systems. You may say, !wheels, !tracks or !hovers');
  	}
});
  //!wheels, !tracks or !hovers

 client.on('message', message => {
    if (message.content === '!combatroles') {
    	message.reply('as a member of QLTY you may have heard us throw around the term Roles, heres what we are talking about. There are five combat roles, which define your responsibility in a match. You may say, !frontline, !flanker, !heavyhitter, !support, !artillery');
  	}
});
  //!frontline, !flanker, !heavyhitter, !support, !artillery

 client.on('message', message => {
    if (message.content === '!frontline') {
    	message.reply('the Front-Line role is comparable to "tanks" in other game-genres. Your job is to get to the front of the battle and last. Often you will be slow so consider which side of the battle, offense or defense to commit to after the initial engagement. When building for this role prioritize shielding your weapons and total Cabin structure.');
  	}
});

 client.on('message', message => {
    if (message.content === '!flanker') {
    	message.reply('the Flanker role is comparable to "assassins" in other game-genres. You are responsible for creating an impact that must be dealt with on far section or behind enemy lines. You must time your engagement correctly, or be massively overwhelemd by the opposing force. When building for this role prioritize speed and offense, plusses for loadouts good at dueling a single opponent.');
  	}
});

 client.on('message', message => {
    if (message.content === '!heavyhitter') {
    	message.reply('the Heavy Hitter role is comparable to "mages" in other game-genres. You are responsible for raw damage output and cabin-destruction. The trick will be not getting focused down while you eliminate targets. When building for this role you should prioritize complimentary gun loadouts and raw damage.');
  	}
});
  //!

 client.on('message', message => {
    if (message.content === '!Artillery') {
    	message.reply('the Artillery role is comparable to "snipers" in other game-genres. They combine the functions of the Heavy Hitter and Support roles. You are responsible for area-denial and threatening enemies clutching onto cricitcal positions. When building for this role you should prioritize your weapons and mobility. It can often be a good idea to take a secondary weapon for getting you out of sticky situations.');
  	}
});


 client.on('message', message => {
    if (message.content === '!support') {
    	message.reply('the Support role (despite its lack of healing or buffs is comparable to the "supports" from other game-genres. Your job is to reinforce critical areas and pushes with deployables or disabling weapons. The ultimate positioning role, you must be aware of the flow of both teams and lend your aid at the appropriate place and time. When building for this role prioritize sensory equipment, and mobility.');
  	}
});

 client.on('message', message => {
    if (message.content === '!raidtypes') {
    	message.reply('there are five types of Raids');
  	}
});
  //!


 client.on('message', message => {
    if (message.content === '!brawltypes') {
    	message.reply('brawls are good for farming Scrap fast. There are four regular brawl types with occasional special event brawls added into the mix. Some brawls provide a build while others will use your currently loaded vehicle. The PS of the vehicle is not taken into account for matchmaking in these brawls. You can say, !storm, !ffa, !bbs, !race, !witchhunt');
  	}
});
  //!storm, !ffa, !bbs, !race, !witchhunt


 client.on('message', message => {
    if (message.content === '!storm') {
    	message.reply('Storm Warning is a One-Life Free For All. B After 35(?) seconds a red zone will begin enveloping the map. Being in this zone does damage to your vehicle. Best to take your Flanker or Heavy-Hitter builds and attempt to hide from other players until the Storm forces a final confrontation.');
  	}
});

 client.on('message', message => {
    if (message.content === '!ffa') {
    	message.reply('Free For All is a Timed Highest Frags Free For All. No holds barred, bring your best bruiser.');
  	}
});

 client.on('message', message => {
    if (message.content === '!bbs') {
    	message.reply('blah');
  	}
});

 client.on('message', message => {
    if (message.content === '!race') {
    	message.reply('blah');
  	}
});

 client.on('message', message => {
    if (message.content === '!witchhunt') {
    	message.reply('blah');
  	}
});

 client.on('message', message => {
    if (message.content === '!') {
    	message.reply('');
  	}
});
  //!

client.login(process.env.BOT_TOKEN);
