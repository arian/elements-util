"use strict";

var $ = require("elements")

$.implement({

    position: function(){
        var node = this[0], box = {left: 0, right: 0, top: 0, bottom: 0},
            win = window, doc = node.ownerDocument,
            docElem = doc.documentElement,
            body = doc.body

        if (typeof node.getBoundingClientRect !== "undefined"){
            box = node.getBoundingClientRect()
        }

        var clientTop  = docElem.clientTop  || body.clientTop  || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            scrollTop  = win.pageYOffset || docElem.scrollTop,
            scrollLeft = win.pageXOffset || docElem.scrollLeft,
            dx = scrollLeft - clientLeft,
            dy = scrollTop - clientTop

        return {
            x: box.left + dx, left: box.left + dx,
            y: box.top + dy, top: box.top + dy,
            right: box.right + dx, bottom: box.bottom + dy,
            width: box.right - box.left,
            height: box.bottom - box.top
        }
    }

})
