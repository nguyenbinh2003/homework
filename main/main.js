console.log(names);
var names = "Bình Nguyễn";

let array = [1, 2, 3];
let extension = [4, 5, 6];

array = [...extension, ...array];
console.log(array);
function mystery(...params) {
  return params;
}
// let a = mystery(1, 23, 4);
// console.log(a);

console.log([...[..."..."]].length);
let a = 12,
  b = 3;
console.log(([a, b] = [b, a]));
// const obj = {
//   name: "MindX",
// };
// const sayHello = (x) => {
//   let { name } = x;
//   name = "Code Intensive";
// };
// sayHellO(obj); //Error

// let arr = [1, 2, 3, 4, 5];
// let isArr = arr.map((item) => {
//   if (item % 2 === 0) {
//     return item;
//   }
//   return item * 2;
// });
// console.log(isArr);
const arr = [1, 2, 3, 4, 5];
const total = arr
  .filter((item) => item % 2 === 0)
  .reduce((value, item) => value + item, 10);

console.log(total);

let arrs = ["abcdef"];

let isArrs = arrs.map(() => {
  arrs = [...arrs[0]];
  return arrs.reverse().join("");
});

console.log(isArrs);

let isArray = [1, 2, 3, 5, 4, 2, 6, 4];

const myFunction = () => {
  let newArray = [];
  for (const i in isArray) {
    console.log(isArray[i]);
    // if (!newArray.includes(isArray[i])) {
    //   newArray.push(isArray[i]);
    // }
    if (newArray[isArray[i]] === undefined) {
      newArray.push(isArray[i]);
    }
  }
  return newArray;
};

console.log(myFunction());
