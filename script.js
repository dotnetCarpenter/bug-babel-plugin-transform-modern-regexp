'use strict'

let testString = 'foo:napp2019'
const regex = /(?<p>\w+):(?<name>\w+)(?<year>\d+)/ui

let res = regex.exec(testString)

console.log(res.groups.year)
console.log(res.groups.p)
console.log(res.groups.name)

console.log(regex.test(testString))
