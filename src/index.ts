export {};

// Property does not exist on type String in TypeScript

// EXAMPLE 1 - Make sure you haven't misspelled a built-in method

const name = 'Bobby Hadz';

// 👇️ BOBBY HADZ
console.log(name.toUpperCase());

// ---------------------------------------------------

// // EXAMPLE 2 - Using an object instead of a string

// interface Person {
//   name: string;
//   id: number;
// }

// const p1: Person = {
//   name: 'Bobby Hadz',
//   id: 1,
// };

// console.log(p1.name); // 👉️ "Bobby Hadz"
// console.log(p1.id); // 👉️ 1

// ---------------------------------------------------

// // EXAMPLE 3 - Object with optional properties

// interface Person {
//   name?: string;
//   id?: number;
// }

// const p1: Person = {};

// p1.name = 'Bobby Hadz';
// p1.id = 1;

// console.log(p1.name); // 👉️ "Bobby Hadz"
// console.log(p1.id); // 👉️ 1

// ---------------------------------------------------

// // EXAMPLE 4 - Using variable keys

// type Person = {
//   [key: string]: any;
//   name: string;
// };

// const p1: Person = {
//   name: 'Bobby Hadz',
// };

// p1.id = 1;
// p1.salary = 100;

// console.log(p1.name); // 👉️ "Bobby Hadz"
// console.log(p1.test); // 👉️ undefined

// ---------------------------------------------------

// // EXAMPLE 5 - Using variable keys

// type Person = {
//   [key: string]: any;
//   name: string;
// };

// const p1: Person = {
//   name: 'Bobby Hadz',
// };

// p1.id = 1;
// p1.salary = 100;

// console.log(p1.name); // 👉️ "Bobby Hadz"
// console.log(p1.test); // 👉️ undefined
