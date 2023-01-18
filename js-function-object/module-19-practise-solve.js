// 1) Write a function called foo() which prints “foo” and a function called bar() which prints “bar”. Call function bar() in the foo() function after printing.What will be the output ? Now call the foo() to see the output.
function bar() {
    console.log('bar');
}
function foo() {
    console.log('foo');
    bar();
}
foo();

// 2) Write a function called make_avg() which will take an three integers and return the average of those values.
function make_avg(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
console.log(make_avg(10, 15, 25));

// 3) Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(numberList) {
    sum = 0;
    for (i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    avg = sum / numberList.length;
    return avg;
}
var numberToAvg = [10, 20, 30, 40];
console.log(make_avg(numberToAvg));

// 4) Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter
function odd_even(n) {
    if (n % 2 == 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}
odd_even(11);

// 5) You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.
function trafficSignal(signal) {
    if (signal == 'red') {
        return 'Don\'t go, you may be in danger';
    }
    else if (signal == 'yellow') {
        return 'Wait just a little';
    }
    else if (signal == 'green') {
        return 'Go! Go! Go!';
    }
    else {
        return 'You better decide to choose';
    }
}
console.log(trafficSignal('green'));