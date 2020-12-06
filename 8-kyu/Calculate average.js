/*
Write function avg which calculates average of numbers in given list.
*/

const find_average = array => array.reduce((a, b) => a += b, 0) / array.length;