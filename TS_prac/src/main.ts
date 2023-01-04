/*
타입 종류
문자
숫자
불린
Null / Undefined
배열
객체
함수
Any
Unknown
Tuple
Void
Never
Union
Intersection
*/

// 문자
let str: string;
let red: string = "Red";
let green: string = "Green";
let myColor: string = `My color is ${red}.`;
let yourColor: string = "Your color is" + green;

// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

// 불린
let isBoolean: boolean;
let isDone: boolean = false;

// Null / Undefined
let nul: null;
let und: undefined;
nul = null;
let num2: number;
num2 = 123;
console.log(nul);
console.log(und);
console.log(num2);

// 배열
const fruits: string[] = ["Apple", "Banana", "Cheery"];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string | number)[] = ["Apple", 1, 2, "Banana", 3];
const array: number[] = [1, 2, 3];

// 객체
// typeof DATA === 'object'
// object 타입을 사용 잘 안한다.
const obj: object = {};
const arr: object = [];
const func: object = function () {};
// 이런 식으로
interface User {
  name: string;
  age: number;
  isValid: boolean;
}
const userA: User = {
  name: "TH",
  age: 28,
  isValid: true,
};
const userB: User = {
  name: "JTH",
  age: 18,
  isValid: false,
};

// 함수
const add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
const a: number = add(2, 6);

const hello = function (): void {
  console.log("Hello World~~");
};
const h: void = hello();

// Any
// Unknown
// Tuple
const tuple: [string, number, boolean] = ["a", 1, false];
const users: [number, string, boolean][] = [
  [1, "Neo", true],
  [2, "Evan", false],
  [3, "Lewis", true],
];
// Void
// Never
// Union
// Intersection
