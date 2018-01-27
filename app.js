//Initial Vars
const bdoBossAlert = require(__dirname+'/bdoBossAlert.js');
const Discord = require('discord.js');
const token = "ITS_ASECRET";//!!Insert Discord Bot Token!!\\
const bot = new Discord.Client();
var emitter = require('./emitter');
/////////////////////////////////////////
////Discord Bot
////////////////////////////////////////
//Run On Bot Login
bot.on('ready', () => {
  console.log('Logged Into Server');

  //set channel id
  var channel = bot.channels.get('PUT_YOUR_TEXT_CHANNEL_HERE');//!!Insert Desired Text Channel Id!!\\
  channel.send("Looking Out For BDO Boss Spawns...");

  //A BDO Boss Spawned
  emitter.bossEvents.on("bossSpawn", function(boss){
  	//Message Sent To Discord
	var embed  = new Discord.RichEmbed()
		.setAuthor("BDO Boss Alert",boss.img)
		.setTitle(boss.alert)
		.setColor(0x00AE86)
		.setTimestamp()
  		.setImage(boss.img);//boss image
	channel.send({embed});//alert discord
  });
  
});
//Login Bot User
bot.login(token);
