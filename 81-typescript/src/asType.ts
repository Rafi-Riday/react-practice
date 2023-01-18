type User = {
    name: string,
    email: string,
};

let user = {} as User;

user = {
    name: 'Riday',
    email: 'rafi.riday@gmail.com',
};

interface Description {
    Nisha: string,
    Riday: string,
};

const description = {} as Description;

const user2 = {
    name: 'Riday',
    email: 'rafi.riday@gmail.com'
} as const;

const family = ['Riday', 'Nisha'] as const;

family.forEach(f => description[f] = `${f} on fire`);

console.log(description);