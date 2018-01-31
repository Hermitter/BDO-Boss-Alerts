//Initial Variables
var cheerio = require("cheerio");
var request  = require("request");
var emitter = require('./emitter')

///////////////////////////////////////
//Obtaining Boss Spawning Data (Loop)
//////////////////////////////////////
//Boss Data Holders: Ordered by how they appear on http://urzasarchives.com/bdo/wbtbdo/wbtna/
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
var lastSpawn = "";
var nextSpawn = "";
function retrieveBossData(callback){
    //Url for boss spawn data
    var url = "http://urzasarchives.com/bdo/wbtbdo/wbtna/";
    //Obtain Boss Spawn Data
    request(url, function (error, response, body) {
            var $ = cheerio.load(body);
            //Attempt Obtain All And Assign Boss Spawn Data (not optimized)
            try{
                //first table has a proper time
                if( /\d/.test($("table").find("tbody > tr").next().find("td").next().next().html()) ){
                    //////////////////////
                    //kutum
                    lastSpawn = $("table").find("tbody > tr").next().find("td").next().next().html();
                    nextSpawn = $("table").find("tbody > tr").next().next().find("td").next().html();
                    if(bossData.kutum.lastSpawn != null && lastSpawn != null && lastSpawn !== bossData.kutum.lastSpawn)//check if spawned
                        emitter.bossEvents.sendEvent("bossSpawn", bossData.kutum);//alert if spawned
                    bossData.kutum.lastSpawn = lastSpawn;
                    bossData.kutum.nextSpawn = nextSpawn;

                    //////////////////////
                    //Dastard Bheg
                    lastSpawn = $("table").next().find("tbody > tr").next().find("td").next().next().html();
                    nextSpawn = $("table").next().find("tbody > tr").next().next().find("td").next().html();
                    if(bossData.dastardBheg.lastSpawn != null && lastSpawn != null && lastSpawn !== bossData.dastardBheg.lastSpawn)//check if spawned
                        emitter.bossEvents.sendEvent("bossSpawn", bossData.dastardBheg);//alert if spawned
                    bossData.dastardBheg.lastSpawn = lastSpawn;
                    bossData.dastardBheg.nextSpawn = nextSpawn;

                    //////////////////////
                    //Dim Tree Spirit
                    lastSpawn = $("table").next().next().find("tbody > tr").next().find("td").next().next().html();
                    nextSpawn = $("table").next().next().find("tbody > tr").next().next().find("td").next().html();
                    if(bossData.dimTreeSpirit.lastSpawn != null && lastSpawn != null && lastSpawn !== bossData.dimTreeSpirit.lastSpawn)//check if spawned
                        emitter.bossEvents.sendEvent("bossSpawn", bossData.dimTreeSpirit);//alert if spawned
                    bossData.dimTreeSpirit.lastSpawn = lastSpawn;
                    bossData.dimTreeSpirit.nextSpawn = nextSpawn;

                    //////////////////////
                    //Giant Mudster
                    lastSpawn = $("table").next().next().next().find("tbody > tr").next().find("td").next().next().html();
                    nextSpawn = $("table").next().next().next().find("tbody > tr").next().next().find("td").next().html();
                    if(bossData.giantMudster.lastSpawn != null && lastSpawn != null && lastSpawn !== bossData.giantMudster.lastSpawn)//check if spawned
                        emitter.bossEvents.sendEvent("bossSpawn", bossData.giantMudster);//alert if spawned
                    bossData.giantMudster.lastSpawn = lastSpawn;
                    bossData.giantMudster.nextSpawn = nextSpawn;

                    //////////////////////
                    //Karanda
                    lastSpawn = $("table").next().next().next().next().find("tbody > tr").next().find("td").next().next().html();
                    nextSpawn = $("table").next().next().next().next().find("tbody > tr").next().next().find("td").next().html();
                    if(bossData.karanda.lastSpawn != null && lastSpawn != null && lastSpawn !== bossData.karanda.lastSpawn)//check if spawned
                        emitter.bossEvents.sendEvent("bossSpawn", bossData.karanda);//alert if spawned
                    bossData.karanda.lastSpawn = lastSpawn;
                    bossData.karanda.nextSpawn = nextSpawn;

                    //////////////////////
                    //Kzarka
                    lastSpawn = $("table").next().next().next().next().next().find("tbody > tr").next().find("td").next().next().html();
                    nextSpawn = $("table").next().next().next().next().next().find("tbody > tr").next().next().find("td").next().html();
                    if(bossData.kzarka.lastSpawn != null && lastSpawn != null && lastSpawn !== bossData.kzarka.lastSpawn)//check if spawned
                        emitter.bossEvents.sendEvent("bossSpawn", bossData.kzarka);//alert if spawned
                    bossData.kzarka.lastSpawn = lastSpawn;
                    bossData.kzarka.nextSpawn = nextSpawn;

                    //////////////////////
                    //Red Nose
                    lastSpawn = $("table").next().next().next().next().next().next().find("tbody > tr").next().find("td").next().next().html();
                    nextSpawn = $("table").next().next().next().next().next().next().find("tbody > tr").next().next().find("td").next().html();
                    if(bossData.redNose.lastSpawn != null && lastSpawn != null && lastSpawn !== bossData.redNose.lastSpawn)//check if spawned
                        emitter.bossEvents.sendEvent("bossSpawn", bossData.redNose);//alert if spawned
                    bossData.redNose.lastSpawn = lastSpawn;
                    bossData.redNose.nextSpawn = nextSpawn;

                    //////////////////////
                    //Nouver
                    lastSpawn = $("table").next().next().next().next().next().next().next().find("tbody > tr").next().find("td").next().next().html();
                    nextSpawn = $("table").next().next().next().next().next().next().next().find("tbody > tr").next().next().find("td").next().html();
                    if(bossData.nouver.lastSpawn != null && lastSpawn != null && lastSpawn !== bossData.nouver.lastSpawn)//check if spawned
                        emitter.bossEvents.sendEvent("bossSpawn", bossData.nouver);//alert if spawned
                    bossData.nouver.lastSpawn = lastSpawn;
                    bossData.nouver.nextSpawn = nextSpawn;

                    //give new data to callback
                    callback(bossData);
                }
                //website has no proper dates for bosses
                else
                    return;
            }
            catch(htmlError){
                console.log(htmlError+"\nCould not find HTML element!"+"\n Retrying Now!... ");
            }
    });
};

///////////////////////////////////////
//Action Zone
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
endlessLoop();
