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
    	message.reply('Raids are the only way to earn Copper and Electronics. They come in 3 difficulties and 6 types, with one special Raid that is always available; invasion. You may say, !easy, !medium, !hard, !invasion, !defence, !seige, !convoy, !chase, !cargorace, !heist');
  	}
});
  //!easy,- !medium,- !hard,- !invasion, !defence, !seige, !convoy, !chase, !cargorace, !heist

 client.on('message', message => {
    if (message.content === '!easy') {
    	message.reply('easy raids cost 20 gas. Two are available at each rotation, both rewarding copper. Any build may participate in easy raids and you will only have problems if you are under 2.5k.');
  	}
});

 client.on('message', message => {
    if (message.content === '!medium') {
    	message.reply('medium raids cost 40 gas. One is available at each rotation, rewarding copper. Invasion is considered a normal raid for Season purposes, with the same cost and rewards. Medium raids require a PS of 3k, but we recommend 4.5k+.');
  	}
});

 client.on('message', message => {
    if (message.content === '!hard') {
    	message.reply('hard raids cost 60 gas. Two are available at each rotation, one rewarding copper, the other being the only source of electronics in the game. Hard raids require a PS of 4k, but we reccomend 6.5k+.');
  	}
});

 client.on('message', message => {
    if (message.content === '!invasion') {
    	message.reply('Invasion is a special, medium-only raid that is always available. This is how leviathians are utilized and earn copper.');
  	}
});

 client.on('message', message => {
    if (message.content === '!defence') {
    	message.reply('in Defence raids you must protect your teams Pumpjacks. There will be 3 Pumpjacks scattered in random pre-set spawns across the map. Each Pumpjack one by one will be assaulted by enemy raiders, in two waves. Each wave has a count-down clock at the end of which it will spawn that waves enemies around the current pumpjack. Half-way through the timer for the First WAVE of the Second and Third PUMPJACK the new Pumpjack will become active, able to be attacked by enemies. When you kill the LAST ENEMY from the LAST WAVE of a Pumpjack it will deactivate and become invulnerable. Defence is the least punishing raid type in terms of players taking damage, as the enemies will often be firing on the Pumpjack instead of you. Therefore we recommend your most offensive builds. Weapons capable of accurately picking off weapons and quickly destroying enemy cabs should be priortized.');
  	}
});

 client.on('message', message => {
    if (message.content === '!seige') {
    	message.reply('in Seige raids you must destroy the enemy teams Pumpjacks. There will be 10 enemy Pumpjacks ');
  	}
});

 client.on('message', message => {
    if (message.content === '!convoy') {
    	message.reply('');
  	}
});

 client.on('message', message => {
    if (message.content === '!chase') {
    	message.reply('');
  	}
});

 client.on('message', message => {
    if (message.content === '!cargorace') {
    	message.reply('');
  	}
});

 client.on('message', message => {
    if (message.content === '!heist') {
    	message.reply('');
  	}
});

 client.on('message', message => {
    if (message.content === '!brawltypes') {
    	message.reply('brawls are good for farming Scrap fast. There are four regular brawl types with occasional special event brawls added into the mix. Some brawls provide a build while others will use your currently loaded vehicle. The PS of the vehicle is not taken into account for matchmaking in these brawls. You can say, !storm, !ffa, !bbs, !race, !witchhunt');
  	}
});
  //!storm,- !ffa,- !bbs,- !race,- !witchhunt-

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
    	message.reply('Big Black Scorpions is a Timed Highest Frags Free For Fall. A build is provided for you. The Big Black Scorpion build has four boosters aimed straight down to jump/dodge with and of course one Scorpion Relic Weapon. There is a special modifier on the vehicles which prevents the loss of individual parts. The scorpion will be a one-shot kill. This is Crossouts Golden Gun mode.');
  	}
});

 client.on('message', message => {
    if (message.content === '!race') {
    	message.reply('Race has special objectives called Gates. There are a handful of Gates spread throughout the map, which must be driven through sequentially to complete a lap. First player to complete the third lap wins.');
  	}
});

 client.on('message', message => {
    if (message.content === '!witchhunt') {
    	message.reply('Witch Hunt has a special objective, the Balloons or sometimes called the Ball. The Ball is picked up by driving onto it at the start, or by coming into contact (forcibly or not) with the current holder of the ball. The first player to have held the ball for a total of 100 seconds wins the match.');
  	}
});

 client.on('message', message => {
    if (message.content === '!') {
    	message.reply('');
  	}
});
  //!

client.login(process.env.BOT_TOKEN);
