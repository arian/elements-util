"use strict";

var expect = require("expect.js")

var behavior = require('../lib/behavior')
var $ = require('elements')
require('elements/insertion')

describe("behavior", function(){

    it('should create a new behavior', function(){
        var beh = behavior()
        var count = 0
        beh.add('#test', function(node){
            count++
        })
        beh.update()
        expect(count).to.be(1)
    })

    it('should should call on multiple matched elements', function(){
        var beh = behavior()
        var count = 0
        beh.add('.slider', function(node){
            count++
        })
        expect(count).to.be(0)
        beh.update()
        expect(count).to.be(3)
    })

    it('should be applied after .update() only on new elements', function(){
        var beh = behavior()
        var nodes = []
        beh.add('.popup', function(node){
            nodes.push(node)
        })
        expect(nodes.length).to.be(0)
        beh.update()
        expect(nodes.length).to.be(3)

        // inject new elements
        $(document.createElement('div')).addClass('popup').after(nodes[2])
        $(document.createElement('div')).addClass('popup').after(nodes[2])

        beh.update()

        expect(nodes.length).to.be(5)

    })

})
