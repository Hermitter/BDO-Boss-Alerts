# BDO-Boss-Alerts
Insert your bot-id and desired text-channel-id in the <a href="https://github.com/Hermitter/BDO-Boss-Alerts/blob/master/app.js" >app.js file<a/>
```
npm install //for all dependencies
node app.js //to run
```
<br/>
This repo contains all the code you need to make your Discord bot into a BDO Boss Alerter. All the data comes from scraping <a href="http://urzasarchives.com/bdo/wbtbdo/wbtna/" target="_blank">Urzas Archives</a>. Without an official api for boss spawns, this app is bound to break in the future. If a proper api ever does come out, I will go back and clean the messy code.

# Example Message
![ScreenShot](https://i.imgur.com/mioc0dm.png)

# Discord Bot Setup

<b>Create An App:</b> https://discordapp.com/developers/applications/me
- Record Client ID & Create A Bot User
![ScreenShot](https://hackster.imgix.net/uploads/attachments/376380/1_T4qlzXFOt9.png?auto=compress%2Cformat&w=680&h=510&fit=max)
![ScreenShot](https://hackster.imgix.net/uploads/attachments/376381/2_XeXO5LGwQJ.png?auto=compress%2Cformat&w=680&h=510&fit=max)<br/>
<b>Invite The Bot To Your Server:</b>
- Replace the section with XXXXXXXXXXXXXXX in the link below with your Client ID.<br/>
- https://discordapp.com/oauth2/authorize?client_id=XXXXXXXXXXXXXXX&scope=bot&permissions=1
