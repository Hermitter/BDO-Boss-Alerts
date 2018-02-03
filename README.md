# BDO-Boss-Alerts
This repo contains all the code you need to make your Discord bot into a BDO Boss Alerter. All the data comes from scraping <a href="http://urzasarchives.com/bdo/wbtbdo/wbtna/" target="_blank">Urzas Archives</a>. Without an official api for boss spawns, this app is bound to break in the future. If a proper api ever does come out, I can go back and update the project.

# Example Message
![ScreenShot](https://i.imgur.com/mioc0dm.png)

# Setup Guide
<b>Download the project and install Node.js:</b> https://nodejs.org/en/

<br/>

<b>Create A Discord App:</b> https://discordapp.com/developers/applications/me
- Record Client ID & Create A Bot User
![ScreenShot](https://hackster.imgix.net/uploads/attachments/376380/1_T4qlzXFOt9.png?auto=compress%2Cformat&w=680&h=510&fit=max)
![ScreenShot](https://hackster.imgix.net/uploads/attachments/376381/2_XeXO5LGwQJ.png?auto=compress%2Cformat&w=680&h=510&fit=max)<br/>
<b>Invite The Bot To Your Server:</b>
- Replace the section with XXXXXXXXXXXXXXX in the link below with your Client ID.<br/>
- https://discordapp.com/oauth2/authorize?client_id=XXXXXXXXXXXXXXX&scope=bot&permissions=1

<br/>

<b>Insert your bot-id and desired <a href="https://github.com/Chikachi/DiscordIntegration/wiki/How-to-get-a-token-and-channel-ID-for-Discord#get-the-channel-id-of-the-discord-text-channel">text-channel-id</a> in the <a href="https://github.com/Hermitter/BDO-Boss-Alerts/blob/master/config.json" >config.json file<a/></b>

<br/>

<b>Go inside the project, through your terminal, and type: </b>
```
npm install
node app.js
```

<b>Your bot should be running and good to go!</b>
