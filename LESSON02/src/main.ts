let myName: string;
let age: Number;
let isLoading: Boolean;
let album: any;

myName = 'Jack';
age = 24;
isLoading = true;
album = false;

const sum = (a: number = 2, b: string = '1') => {
  return a + b
}

console.log(sum())

console.log(album)