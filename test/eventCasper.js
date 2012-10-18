"use strict";

var casper = require('casper').create()

casper.start('http://localhost:8080/event.html')

casper.on('page.error', function(msg, trace){
    this.test.fail(msg)
})

casper.then(function(){
    this.click('#test')
    this.click('#test-target')
    this.click('#test-propagation')
})

casper.run(function(){
    this.echo('ready')
    this.exit(this.test.testResults.failed ? 1 : 0)
})
