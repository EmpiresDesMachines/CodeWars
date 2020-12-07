/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect
*/

const isPangram = string => [...new Set(string.toLowerCase())].join('').replace(/[^a-z]/g, '').length === 26;