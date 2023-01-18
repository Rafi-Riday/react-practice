// main class
class Ccpc {
    name;
    roll;
    college = 'CCPC';
    address;
    year = '2020-2022';
    constructor(name, roll, address) {
        this.name = name;
        this.roll = roll;
        this.address = address;
    }
    exam(subject, date) {
        console.log(`${subject} exam is on ${date}`);
    }
}
// extended for sciencs
class Science extends Ccpc {
    type = 'Science';
    marks = {};
    constructor(name, roll, address, physics, chemistry, higherMath) {
        super(name, roll, address);
        this.marks.physics = physics;
        this.marks.chemistry = chemistry;
        this.marks.higherMath = higherMath;
    }
    sayType() {
        console.log(`We are ${this.type} students`);
    }
}
// extended for commerce
class Commerce extends Ccpc {
    type = 'Commerce';
    marks = {};
    constructor(name, roll, address, economics, businessStudies, accounting) {
        super(name, roll, address);
        this.marks.economics = economics;
        this.marks.businessStudies = businessStudies;
        this.marks.accounting = accounting;
    }
    sayType() {
        console.log(`We are ${this.type} students`);
    }
}

const riday = new Science('Riday', 184, 'Chattogram', 89, 91, 98);
console.log(riday);
riday.exam('Physics', '10 August');
riday.sayType();

const unknown = new Commerce('Unknown', 812, 'Dhaka', 94, 84, 96);
console.log(unknown);
riday.exam('Economics', '10 August');
unknown.sayType();
