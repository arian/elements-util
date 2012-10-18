"use strict";

var prime = require("prime")
var $ = require("elements")

var Event = prime({

    constructor: function(event){
        this.event = event
    },

    type: function(){
        return this.event.type
    },

    target: function(){
        var event = this.event
        var target = event.target || event.srcElement
        while (target && target.nodeType == 3) target = target.parentNode
        return $(target)
    },

    stopPropagation: function(){
        if (this.event.stopPropagation) this.event.stopPropagation()
        else this.event.cancelBubble = true
        return this
    },

    preventDefault: function(){
        if (this.event.preventDefault) this.event.preventDefault()
        else this.event.returnValue = false
        return this
    }

})

module.exports = function(event){
    return new Event(event)
}
