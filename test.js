var test = require('tressa');
var module = require('./application');
var random = Math.random();

test.title('Testing Application');

test(typeof module === 'function', 'is a function');

test(module(random) === random, 'returns random');
test(module() === null, 'returns null');

test.async(function (done) {
  setTimeout(function () {
    test.log('*async* tests');
    test(module(random) === random);
    test(module() === null, 'all good');
    done();
  }, 100);
});
