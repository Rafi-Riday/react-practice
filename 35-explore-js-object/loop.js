const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1.5,
}

// loop using keys array
Object.keys(bottle).forEach(key => {
    console.log(key, bottle[key]);
});

console.log();

// loop using entries array
Object.entries(bottle).forEach(entries => {
    [key, value] = entries;
    console.log(key, value);
});

console.log();

// loop using for in
for (const key in bottle) {
    console.log(key, bottle[key]);
}
