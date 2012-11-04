
lint:
	./node_modules/.bin/jshint ./lib ./test

test-server:
	node ./test/server.js

test: lint
	casperjs ./test/eventCasper.js
	casperjs ./test/casper.js http://localhost:8080/behavior.html

.PHONY: test
