// Array Methods

// 1. map()
// iterate over the arr elements & do some operation & return the new copy of array

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.map((el) => el + 1));

console.log(arr1.map((el) => "b"));

// 2. filter()
// return back new array which contains the elements which passes the certain condition and return true

const arr2 = [1, 3, 5, 7, 9];

console.log(arr2.filter((el) => el >= 5));

console.log(arr2.filter((el) => el < 1));

// 3. includes()
// returns true if the element present in the array

const arr3 = [1, 2, 3, 4, 5];

console.log(arr3.includes(3));

// specifying start index for includes

console.log(arr3.includes(3, 3));

const objArray = [{ id: 1 }, { id: 2 }, { id: 3 }];

console.log(objArray.includes({ id: 2 })); // returns false

// because it is not an primitive type,
// it is an object, js works on variable which pointing the value to memory bank (for primitive types)

a = 1;
b = 2;
c = b;
// c is pointing to the value in the memory bank of primitive type
console.log(b === c); // return true
b = 3;
console.log(b);
console.log(c); // outputs 2

// js stores objects as a new reference in memory
// it compares if both pointing to the same reference in the memory not the value

const o1 = { id: 1 };
const o2 = { id: 2 };
const o3 = { id: 3 };

const objArr = [o1, o2, o3];

console.log(objArr.includes(o2)); // returns true

// 4. find() -> similar to filter
// helps to find a specific element based on a condition
// returns first element in the target that return true based (which matches) on a condition

const arr4 = [1, 2, 3, 4, 5];

console.log(arr4.find((el) => el > 4));

console.log(arr4.find((el) => el === 4));

const peopleArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

console.log(peopleArray.find((person) => person.id === 3));

// 5. reduce()
// Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function

const arr5 = [1, 2, 3, 4, 5];

console.log(
  arr5.reduce((accumulator, currentElement) => accumulator + currentElement, 0)
);

