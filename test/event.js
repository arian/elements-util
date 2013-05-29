"use strict";

var expect = require('expect.js')
var $ = require('elements')
var ready = require('elements/domready')
var event = require('../lib/event')

var mouse = require('../lib/event/mouse')
var key = require('../lib/event/key')

ready(function(){

    // eventCasper.js will click those elements. Casperjs will also listen
    // for error events, which the expect() calls will throw, if something
    // is wrong.

    var test = $(document.getElementById('test'))

    test.on('click', function(e){
        e = event(e)
        e.preventDefault()
        expect(e.type()).to.be('click')
        expect(e.target() == test).to.be.ok()
        expect(location.hash).not.to.be('#foo')

        // mouse should accept another wrapped event
        var m = mouse(e)
        var page = m.page()
        var client = m.client()

        expect(page.x).to.be.ok()
        expect(page.y).to.be.ok()
        expect(client.x).to.be.ok()
        expect(client.y).to.be.ok()

    })

    var wrap = $(document.getElementById('wrap'))
    var target = $(document.getElementById('test-target'))

    wrap.on('click', function(e){
        e = event(e)
        expect(e.target() == target).to.be.ok()
    })

    var prop = $(document.getElementById('propagation'))
    var testPropagation = $(document.getElementById('test-propagation'))

    prop.on('click', function(){
        expect('can not click here').not.to.be.ok()
    })

    testPropagation.on('click', function(e){
        event(e).stopPropagation()
    })



})

