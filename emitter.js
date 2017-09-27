var util = require('util');
var eventEmitter = require('events').EventEmitter;

function Event () {
    eventEmitter.call(this)
}

util.inherits(Event, eventEmitter)

Event.prototype.sendEvent = function(type, data) {
    this.emit(type, data)
}
var bossEvents = new Event();
module.exports = {
 emitter : Event,
 bossEvents : bossEvents
};