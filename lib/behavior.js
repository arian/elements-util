"use strict";

// credits to Aaron Newton, Valerio Proietti, and Cristoph Pojer for the idea
// and who have made similar implementations

// traversal implements .search()
var $     = require('elements/traversal')
var prime = require('prime')
var array = require('prime/es5/array')

var Behavior = prime({

    constructor: function(){
        this.behaviors = []
    },

    add: function(selector, behavior){
        this.behaviors.push({s: selector, b: behavior})
        return this
    },

    update: function(){
        array.forEach(this.behaviors, function(behavior){
            var nodes = $(behavior.s)
            if (nodes) nodes.forEach(function(node){
                node = $(node)
                var updated = node._behaviorUpdated || (node._behaviorUpdated = [])
                if (array.indexOf(updated, behavior) == -1){
                    behavior.b.call(node, node)
                    updated.push(behavior)
                }
            })
        })
        return this
    }

})

module.exports = function(){
    return new Behavior()
}
