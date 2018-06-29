'use strict';

let testString = 'foo:napp2019';
const regex = /(\w+):(\w+)(\d+)/i;

let res = regex.exec(testString);

console.log(res.groups.year);
console.log(res.groups.p);
console.log(res.groups.name);

console.log(regex.test(testString));
