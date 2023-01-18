type Auth = { auth: boolean };

type Profile = {
    name: string,
    age: number,
    phone: string | string[],
    favorite: {
        type: 'player' | 'food' | 'game',
        value: string,
    }[],
};

const profile1: Profile & Auth = {
    name: 'Riday',
    age: 20,
    phone: ['01758166240'],
    favorite: [
        {
            type: 'game',
            value: 'Badminton',
        },
    ],
    auth: false,
};

console.log(profile1);

type Profile2 = {
    x: string,
};

type Profile3 = {
    y: string,
};

const profile3: Profile2 & Profile3 = {
    x: 'cse',
    y: 'eee',
};

console.log(profile3);