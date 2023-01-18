let newPlayer: {
    name: string;
    age?: number;
    married: boolean;
    clubs?: string[];
};

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

newPlayer.clubs = newPlayer.clubs?.map(club => club.toUpperCase());
newPlayer.age && (newPlayer.age = newPlayer.age + 5);
newPlayer.age = newPlayer.age! + 5;
// newPlayer.age = newPlayer.age && newPlayer.age + 5;
// newPlayer.age = newPlayer.age ? newPlayer.age + 5 : void (0);

console.log(newPlayer);

// Enum
enum Friend {
    Muhammad,
    Issac,
    Riday,
    David,
};

console.log(Friend);
// console.log(Friend.Muhammad);
// console.log(Friend[0]);
// console.log(Friend[Friend.Muhammad]);

for (let _i in Friend) {
    console.log(_i);
}

enum Configs {
    Mother = 3, // custom number
    Father = 4,
    Wife = 5,
    Friend = 10,
    API_Kay = 'api_key', // custom string
    DOMAIN_Name = 'domain_name',
}

console.log(Configs);