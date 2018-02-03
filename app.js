//Initial Vars
const fs = require("fs");
var config = JSON.parse(fs.readFileSync('config.json'));//load user prefrences
const bdoBossAlert = require(__dirname+'/bdoBossAlert.js');
const Discord = require('discord.js');
const token = config.bot_id;
const bot = new Discord.Client();
const emitter = require('./emitter');
/////////////////////////////////////////
////Discord Bot
////////////////////////////////////////
//Run On Bot Login
bot.on('ready', () => {
  console.log('Logged Into Server');

  //set channel id
  var channel = bot.channels.get(config.text_channel_id);
  channel.send("Looking Out For BDO Boss Spawns...");

  //A BDO Boss Spawned
  emitter.bossEvents.on("bossSpawn", function(boss){
  	//Message Sent To Discord
	var embed  = new Discord.RichEmbed()
		.setAuthor("BDO Boss Alert",boss.img)
		.setTitle(boss.alert)
		.setColor(0x00AE86)
		.setTimestamp()
	if(config.large_boss_image) embed.setImage(boss.img);//use large boss image
	channel.send({embed});//alert discord
  });
  
});
//Login Bot User
bot.login(token);
