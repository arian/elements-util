"use strict";

var $ = require('elements')

$.implement({

    empty: function(){
        this.handle(function(node){
            var first
            while ((first = node.firstChild)) node.removeChild(first)
        })
        return this
    }

})

module.exports = $
