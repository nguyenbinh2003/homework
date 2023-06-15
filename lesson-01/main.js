/*
 * 1.Write a function with 2 input parameters
 * (each parameter is an array).
 * This function returns an array of
 * the same elements in two arrays
 */

const arr1 = [1, 2, 3, 4, 5, 6, 5, 2, 2, 4, 4];
const arr2 = [3, 4, 8, 9, 12];

const sameValue = (arr1, arr2) => {
  let newArray = [];
  for (const i in arr1) {
    for (const j in arr2) {
      if (arr1[i] === arr2[j]) {
        newArray.push(arr1[i]);
      }
    }
  }
  return newArray;
};

console.log(sameValue(arr1, arr2));

//*  2. Find 2 elements with the greatest sum in an array
const twoMaxValue = (arr) => {
  let newArray1 = [];
  let newArray2 = Math.max.apply(null, arr);
  let index = arr.indexOf(newArray2);
  for (const i in arr) {
    newArray1.push(newArray2);
    if (index !== -1) {
      arr.splice(index, 1);
      console.log(arr);
    }
    break;
  }
  for (const i in arr) {
    newArray1.push(Math.max.apply(null, arr));
    break;
  }
  return newArray1;
};

console.log(twoMaxValue(arr2));

//* 3. Find pairs of elements whose
//*  sum is equal to a given number

const findPairs = (arr, sum) => {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
};

console.log(findPairs(arr1, 10));

//* 4. Get a new array from the given array
//* so that the elements appear only once
//* (implement 2 ways: using Set, not using Set)

// *using Set
const set = new Set(arr1);
console.log(set);

// *not using Set

let array = [1, 2, 3, 5, 4, 2, 6, 4];

const notUsingSet = () => {
  let newArray = [];
  for (const i in array) {
    console.log(array[i]);
    // if (!newArray.includes(isArray[i])) {
    //   newArray.push(isArray[i]);
    // }
    if (newArray[array[i]] === undefined) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(notUsingSet());

//* 5. Get a new array of duplicate elements in 2 arrays,
//* each element appears exactly once in the new array

const arr3 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr4 = [3, 5, 9, 10, 88, 7];

const sameValueUpdate = (arr3, arr4) => {
  let newArray = [];
  for (const i in arr3) {
    for (const j in arr4) {
      if (arr3[i] === arr4[j]) {
        newArray.push(arr3[i]);
      }
    }
  }
  let set = new Set(newArray);
  return [...set];
};

console.log(sameValueUpdate(arr3, arr4));

//* 6. Given an array arr1. Write a function that returns
//* a new array of elements that appear more than once in arr1.
//* The elements in new array can only appear once in this array.

const arr5 = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];
const moreThanOnce = (arr) => {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      counts[arr[i]]++;
    }
  }
  let newArray = [];
  for (let i in counts) {
    if (counts[i] > 1) {
      newArray.push(Number(i));
    }
  }
  return newArray;
};
const inputArr = moreThanOnce(arr5);
console.log(inputArr);

//* 7. 	I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
//* 	Write a function with 1 input parameter, an return a new object like this:
//* 	{'face': 2, 'zalo': 3, 'gmail':1} // 2,3,1 are the number of occurrences of
//* 'face', 'zalo', 'gmail' in the array

const myArr = ["face", "zalo", "face", "gmail", "zalo", "zalo"];
const myFunc = (arr) => {
  let newArray = {};
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (newArray[arr[i]] === undefined) {
      newArray[arr[i]] = 1;
    } else {
      newArray[arr[i]]++;
    }
  }
  console.log(newArray);
  return newArray;
};
console.log(myFunc(myArr));

//* 8. 	I have an array like this: 
const arr6 =
 [{ make: 'audi', model: 'r8', year: '2012' },
 { make: 'audi', model: 'rs5', year: '2013' },
 { make: 'ford', model: 'mustang', year: '2012' },
 { make: 'ford', model: 'fusion', year: '2015' },
 { make: 'kia', model: 'optima', year: '2012' }]
//* 	Please write a function has 2 input parameters,
//* 1st param is an array like above array, 2nd param is
//* the name of any property in each object of the array.
//* 	Use example: myFunc('make', arr1);


function myFunction(propName, arr) {
  const result = {};
  arr.forEach(obj => {
    const propValue = obj[propName];
    if (propValue) {
      if (!result[propValue]) {
        result[propValue] = [];
      }
      result[propValue].push(obj);
    }
  });
  return result;
}

console.log(myFunction('make', arr6));

//* 9. I have 1 object like this:
let order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  customer: "Name",
  address: "12 Giai Phong Street",
};
//* 	Please use only reduce method, and only one time, and return 2 variables:
//* totalOfMoney = 1870000, totalOfAmount = 14;

const { cart } = order;
const orderTotal = cart.reduce(
  (acc, cur) => {
    return [acc[0] + cur.price * cur.amount, acc[1] + cur.amount];
  },
  [0, 0]
);

console.log(orderTotal);

//* 10. 	Write 3 methods myMap, myFilter,
//* myReduce (suggestion: use Array.prototype,
//*   "this" keyword, and for loop).
//* 	3 these methods have similar in use and usage as map,
//*   filter, reduce of array in JS

// * myMap
Array.prototype.myMap = function (callback) {
  let output = [],
    arrayLength = this.length;

  for (let i = 0; i < arrayLength; i++) {
    let result = callback(this[i], i);
    output.push(result);
  }
  return output;
};
let map = order.cart.myMap(function (course, index) {
  console.log(course);
  return `${course.name}, `;
});
console.log(map);

// * myFilter
Array.prototype.myFilter = function (callback) {
  let output = [],
    arrayLength = this.length;

  for (let i = 0; i < arrayLength; i++) {
    let result = callback(this[i], i);
    if (result === true) {
      output.push(i, this[i]);
    }
  }
  if (output.length === 0) {
    return undefined;
  }
  return output;
};
let filter = order.cart.myFilter(function (course, index) {
  console.log(index);
  return course.id === 1;
});

console.log(filter);

// * myReduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    if (accumulator === undefined) {
      accumulator = 0;
    }
    accumulator = callback(accumulator, this[i], i, this);
  }
  return parseFloat(accumulator);
};
function sumValues(accumulator, currentValue, index, object) {
  console.log(index);
  console.log(accumulator);
  console.log(object);
  return accumulator + currentValue;
}

let sum = arr1.myReduce(sumValues);
console.log(sum);

//* 11. Get a new array, which includes unique elements.
//* Those elements are elements from arrays in each value
//* of object deps below
const deps = {
  data01: [1, 2, 3, [12, 323]],
  data02: [5, 8, 12],
  data03: [5, 14, 79],
  data04: [3, 64, 105],
  data: 1,
};
// => [1, 2, 3, 12, 323, 5, 8, 14, 79, 64, 105]

const flatArray = (arr) => {
  let newArray = [];
  for (const i in arr) {
    console.log(arr[i]);
    if (Array.isArray(arr[i])) {
      newArray.push(...arr[i]);
    } else {
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
  return newArray.flat();
};

console.log(flatArray(deps));
