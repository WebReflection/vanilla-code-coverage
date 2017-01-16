var module = require('./application');
var random = Math.random();

console.log('Testing Application');

console.log('is a function');
console.assert(typeof module === 'function');

console.log('invoked returns');
console.assert(module(random) === random);
console.assert(module() === null);
