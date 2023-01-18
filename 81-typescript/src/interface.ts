type Authentication = boolean;

type Favorite = {
    type: 'player' | 'food' | 'game',
    value: string,
}[];

interface iProfile {
    name: string,
    age: number,
    phone: string | string[],
    favorite: Favorite,
    auth?: Authentication,
};

const profile2: iProfile = {
    name: 'Riday',
    age: 20,
    phone: ['01758166240'],
    favorite: [
        {
            type: 'game',
            value: 'Badminton',
        },
        {
            type: 'food',
            value: 'Dates',
        },
    ],
    auth: false,
};

console.log(profile2);


interface iProfile2 {
    x: string,
};

interface iProfile2 {
    y: string,
};

const iProfile2: iProfile2 = {
    x: 'cse',
    y: 'eee',
};
