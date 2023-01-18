"use strict";
var _a;
var newPlayer;
newPlayer = {
    name: 'Messi',
    age: 35,
    married: true,
    clubs: ['barcelona', 'psg'],
};
newPlayer = {
    name: 'Neymar',
    // age: 30,
    married: false,
    clubs: ['barcelona', 'psg'],
};
newPlayer.clubs = (_a = newPlayer.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club) { return club.toUpperCase(); });
newPlayer.age && (newPlayer.age = newPlayer.age + 5);
newPlayer.age = newPlayer.age + 5;
// newPlayer.age = newPlayer.age && newPlayer.age + 5;
// newPlayer.age = newPlayer.age ? newPlayer.age + 5 : void (0);
console.log(newPlayer);
// Enum
var Friend;
(function (Friend) {
    Friend[Friend["Muhammad"] = 0] = "Muhammad";
    Friend[Friend["Issac"] = 1] = "Issac";
    Friend[Friend["Riday"] = 2] = "Riday";
    Friend[Friend["David"] = 3] = "David";
})(Friend || (Friend = {}));
;
console.log(Friend);
// console.log(Friend.Muhammad);
// console.log(Friend[0]);
// console.log(Friend[Friend.Muhammad]);
for (var _i in Friend) {
    console.log(_i);
}
var Configs;
(function (Configs) {
    Configs[Configs["Mother"] = 3] = "Mother";
    Configs[Configs["Father"] = 4] = "Father";
    Configs[Configs["Wife"] = 5] = "Wife";
    Configs[Configs["Friend"] = 10] = "Friend";
    Configs["API_Kay"] = "api_key";
    Configs["DOMAIN_Name"] = "domain_name";
})(Configs || (Configs = {}));
console.log(Configs);
