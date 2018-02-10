//Initial Variables
var cheerio = require("cheerio");
var request  = require("request");
var emitter = require('./emitter')

///////////////////////////////////////
//Obtaining Boss Spawning Data (Loop)
//////////////////////////////////////
//Boss Data Holders: Ordered by how they appear on http://urzasarchives.com/bdo/wbtbdo/wbtna/ is mandatory
var bossData = {
    kutum: {alert: "Kutum Spawned!", img: "http://urzasarchives.com/wp-content/uploads/wbt_kutum.png"},
    dastardBheg: {alert: "Dastard Bheg Spawned!", img: "http://urzasarchives.com/wp-content/uploads/wbt_bheg.png"},
    dimTreeSpirit: {alert: "Dim Tree Spirit Spawned!", img: "http://urzasarchives.com/wp-content/uploads/wbt_dim.png"},
    giantMudster: {alert: "Giant Mudster Spawned!", img: "http://urzasarchives.com/wp-content/uploads/wbt_mudster.png"},
    karanda: {alert: "Karanda Spawned!", img: "http://urzasarchives.com/wp-content/uploads/wbt_harpy.png"},
    kzarka: {alert: "Kzarka Spawned!", img: "http://urzasarchives.com/wp-content/uploads/wbt_kzarka.png"},
    redNose: {alert: "Red Nose Spawned!", img: "http://urzasarchives.com/wp-content/uploads/wbt_red.png"},
    nouver: {alert: "Nouver Spawned!", img: "http://urzasarchives.com/wp-content/uploads/wbt_nouver.png"}
}

//Scrape website for boss data
function retrieveBossData(callback){
    //Url for boss spawn data (Set to NA server by default)
    var url = "http://urzasarchives.com/bdo/wbtbdo/wbtna/";//other BDO server URLs are here: http://urzasarchives.com/bdo/wbtbdo/
    //Obtain Boss Spawn Data
    request(url, function (error, response, body) {
        var $ = cheerio.load(body);//html body
        //Attempt Obtain And Assign Boss Spawn Data
        try{
            //find each boss spawn
            var counter = 0;
            for(var boss in bossData){
                readBossData(bossData[boss], counter, $("table"));
                counter++;
            }
            //pass new data to callback
            callback(bossData);
        }
        catch(htmlError){
            console.log(htmlError+"\nCould not find HTML element!"+"\n Retrying Now!... ");
        }
    });
};

//Looks for appropriate boss table
function readBossData(boss, tableNumber, table){
    var selector = table;//initial html table element
    var lastSpawn;
    //find desired boss table
    for(i = 0; i < tableNumber; i++){
        selector = selector.next();
    }
    //record last boss spawn
    lastSpawn = selector.find("tbody > tr").next().find("td").next().next().html();
    //ensure spawn time has numbers
    if(!/\d/.test(lastSpawn))
        return;//exit
    //check if boss spawned
    if(boss.lastSpawn != null && lastSpawn != null && lastSpawn !== boss.lastSpawn)//check if spawned
        emitter.bossEvents.sendEvent("bossSpawn", boss);//alert if spawned
    boss.lastSpawn = lastSpawn;//update last boss spawn
}

///////////////////////////////////////
//Begin Scraping
//////////////////////////////////////
//Wait 10 seconds before running again
function endlessLoop(){
    //send alert to event object
    retrieveBossData(function(data){
        emitter.bossEvents.sendEvent("newData", data);
    });
    //loop
    setTimeout(endlessLoop, 10000);
}
endlessLoop();//start loop
