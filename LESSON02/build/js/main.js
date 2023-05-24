"use strict";
let myName;
let age;
let isLoading;
let album;
myName = 'Jack';
age = 24;
isLoading = true;
album = false;
const sum = (a = 2, b = '1') => {
    return a + b;
};
console.log(sum());
console.log(album);
