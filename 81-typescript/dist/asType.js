"use strict";
var user = {};
user = {
    name: 'Riday',
    email: 'rafi.riday@gmail.com',
};
;
var description = {};
var user2 = {
    name: 'Riday',
    email: 'rafi.riday@gmail.com'
};
var family = ['Riday', 'Nisha'];
family.forEach(function (f) { return description[f] = "".concat(f, " on fire"); });
console.log(description);
