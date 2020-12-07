/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/

const check = (number, operation) => (operation ? operation(number) : number);

const zero = operation => check(0, operation);
const one = operation => check(1, operation);
const two = operation => check(2, operation);
const three = operation => check(3, operation);
const four = operation => check(4, operation);
const five = operation => check(5, operation);
const six = operation => check(6, operation);
const seven = operation => check(7, operation);
const eight = operation => check(8, operation);
const nine = operation => check(9, operation);

const plus = b => a => a + b;
const minus = b => a => a - b;
const times = b => a => a * b;
const dividedBy = b => a => Math.floor(a / b);