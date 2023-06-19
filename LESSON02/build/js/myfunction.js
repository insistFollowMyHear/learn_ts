"use strict";
function addTwo(num) {
    return num + 2;
    //  return '123'
}
function signUpUser(name, email, isPaid = false) { }
// function myValue(val: number): boolean {
//   if (val > 5) {
//     return true
//   }
//   return "200 OK"
// }
const getHello = (s) => {
    return '';
};
const heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1, 'spiderman', 'ironman']
// heros.map((hero: string) => {    // on error
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
addTwo(5);
signUpUser('1', '2');
function heroName(hero, sex) {
    console.log(hero + sex);
}
heroName('spiderman');
