var test = require('tressa');
var module = require('./application');
var random = Math.random();

test.title('Testing Application');

test.log('is a function');
test(typeof module === 'function');

test.log('invoked returns');
test(module(random) === random);
test(module() === null);

test.async(function (done) {
  setTimeout(function () {
    test.log('async returns');
    test(module(random) === random);
    test(module() === null);
    done();
  }, 100);
});
