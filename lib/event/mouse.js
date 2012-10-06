"use strict";

var Event = require('../event')
var prime = require('prime')

var Mouse = prime({

    inherits: Event,

    page: function(){
        var event = this.event

        if (event.pageX !== undefined) return {
            x: event.pageX,
            y: event.pageY
        }

        var doc = document
        doc = (!doc.compatMode || doc.compatMode == 'CSS1Compat') ? doc.html : doc.body
        return {
            x: event.clientX + doc.scrollLeft,
            y: event.clientY + doc.scrollTop
        }
    },

    client: function(){
        var event = this.event

        return (event.pageX !== undefined) ? {
            x: event.clientX - window.pageXOffset,
            y: event.clientY - window.pageYOffset
        } : {
            x: event.clientX,
            y: event.clientY
        }

    }

})

module.exports = Mouse
