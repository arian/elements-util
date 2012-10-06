
lint:
	@./node_modules/.bin/jshint \
		./test ./event ./insertion

test: lint
#	@./node_modules/.bin/mocha --reporter spec \
#		test/types/* \
#		test/prime/*

.PHONY: test
