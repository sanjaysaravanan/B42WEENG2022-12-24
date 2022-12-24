// const arr = [5, 3, 7, 9, 2, 8, 6, 4];

// Slice


// splice


// join


// find


// forEach

const arr = [5, 3, 7, 9, 2, 8, 6, 4]
/**
 * 5 --> 0
 * 3 --> 1
 * 7 --> 2
 * .
 * .
 * .
 * 6 --> 6
 * 4 --> 7
 */

// function printInfo(element, i){
//   // template literals
//   console.log(`${element} --> ${i}`);
// }

const printInfo = (element, i) => {
  // template literals
  console.log(`${element} --> ${i}`);
};


// arr.forEach(printInfo);
// execution flow
// printInfo(5, 0)
// printInfo(3, 1)
// .
// .
// .
// printInfo(4, 7)

// calling with anonymous arrow function
// console.log('calling with anonymous arrow function');
// const someVar = arr.forEach((element, i, entireArr) => {
//   // template literals
//   console.log(`${element} --> ${i}`);
//   // array print
//   console.log('Array', entireArr)
// });

// console.log(someVar);

// return type of forEach -> does not return anything




// map
// creating a new array and returns the created array
// map without return inside arrow function
// const someVarMap = arr.map((element, i, entireArr) => {
//   // template literals
//   console.log(`${element} --> ${i}`);
//   // array print
//   console.log('Array', entireArr);
// });

// execution flow
// anonymousFunc(5, 0, arr) ---> return undefined --> [undefined]
// anonymousFunc(3, 1, arr) ---> return undefined --> [undefined, undefined]
// .
// .
// .
// anonymousFunc(4, 7, arr) ---> return undefined --> [undefined, undefined, ...., undefined]

// console.log(someVarMap);


// map with return inside function
const someVarMap2 = arr.map((element, i, entireArr) => {
  // template literals
  console.log(`${element} --> ${i}`);
  // array print
  console.log('Array', entireArr);

  return `${element} --> ${i}`;
});
// execution flow
// anonymousFunc(5, 0, arr) ---> return '5 --> 0' --> ['5 --> 0']
// anonymousFunc(3, 1, arr) ---> return '3 --> 1' --> ['5 --> 0', '3 --> 1']
// .
// .
// .
// anonymousFunc(4, 7, arr) ---> return '4 --> 7' --> ['5 --> 0', '3 --> 1', ...., '4 --> 7']

console.log('Returned value from Map', someVarMap2);

// Input --> [5, 15, 25, 35, 45]

// Output --> [25, 225, 625, 1225, 2025]

// Note: use Map

const inpArr = [5, 15, 25, 35, 45]


// use map
// const outputArr = inpArr.map((x) => {
//   return x * x;
// });

// shortform for a arrow function which has only one statement/line
const outputArr = inpArr.map((x) => x * x);

console.log(outputArr);


// using destrcture in array methods

// Question 1

// Input
const students = [
  { stuName: 'Sanjay', batch: 'B42WEENG', timing: '2:00PM' },
  { stuName: 'Sam', batch: 'B36WEENG', timing: '2:00PM' },
  { stuName: 'Saravanan', batch: 'B39WEENG', timing: '10:00AM' },
  { stuName: 'Danny', batch: 'B40WEENG', timing: '12:00PM' },
  { stuName: 'John', batch: 'B41WEENG', timing: '9:30AM' },
];

// Ouput:
/**
 * 1. Sanjay ---> B42WEENG
 * 2. Sam --> B36WEENG
 * .
 * .
 * 5. John --> B41WEENG
 */

// forEach
// no need of new array so, forEach is enough

// students.forEach((student, i) => {
//   console.log(`${i+1}. ${student.stuName} --> ${student.batch}`);
// });

// bit more efficient
// 1. destructure at the arguement level
// 2. single line function 
students.forEach(({ stuName, batch }, i) => console.log(`${i + 1}. ${stuName} --> ${batch}`));

// Input
const marks = [
  { stuName: 'Sanjay', batch: 'B42WEENG', eng: 99, maths: 100, sci: 79 },
  { stuName: 'Sam', batch: 'B36WEENG', eng: 97, maths: 99, sci: 89 },
  { stuName: 'Saravanan', batch: 'B39WEENG', eng: 75, maths: 95, sci: 69 },
  { stuName: 'Danny', batch: 'B40WEENG', eng: 99, maths: 100, sci: 100 },
  { stuName: 'John', batch: 'B41WEENG', eng: 99, maths: 100, sci: 79 },
];


// Output:
// Need an array
// [
//   { stuName: 'Sanjay', total: 278 },
//   { stuName: 'Sam', total: 285},
//   { stuName: 'Saravanan', total: 239 },
//   { stuName: 'Danny', total: 299 },
//   { stuName: 'John', total: 278 },
// ]

// use map --> since we need the updated array

// const totalMarks = marks.map(({ stuName, eng, maths, sci }) => {
//   return {
//     stuName,
//     total: eng + maths + sci
//   }
// });

// functions returns object and that is the single line

const totalMarks = marks.map(({ stuName, eng, maths, sci }) => ({
    stuName,
    total: eng + maths + sci
  })
);

console.log(totalMarks);

// filter

// recap find
// find a student whose mark in eng is less then 90

// const filteredStudents = marks.find(({ eng }) => {
//   return eng < 90;
// });

// improvise on above function
// single line function
const filteredStudent = marks.find(({ eng }) => eng < 90);

console.log(filteredStudent);

// filter
// Input
const nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];

console.log(nums.find((num) => num % 2));

// find returns an element from the array


// filter
// Returns the elements of an array that meet the condition specified in a callback function.
// Output --> array of odd elements
// [11, 33, 55, 77, 99]

// const oddNums = nums.filter((num) => num % 2 !== 0);

// 0 --> false
// num other than 0 --> true
const oddNums = nums.filter((num) => num % 2);

// Even Nums
// ! --> negation --> true to false, false to true
const evenNums = nums.filter((num) => !(num % 2));

console.log(oddNums);
console.log(evenNums);


// totalMarks
/** 
 * [
    {stuName: 'Sanjay', total: 278}
    {stuName: 'Sam', total: 285}
    {stuName: 'Saravanan', total: 239}
    {stuName: 'Danny', total: 299}
    {stuName: 'John', total: 278}
   ]
 */

// Filter the students whose total marks is 285 or more
const filteredStudents = totalMarks.filter(( { total } ) =>  total >= 285 );
console.log(filteredStudents);


// Reduce --> Accumulation method

const numArr = [99, 89, 79, 69, 59, 49];

// Find the sum of the elements in the above array

// Output: 444

// without reduce
var total = 0;

for(var num of numArr) {
  total += num;
}

console.log('without reduce',total);

console.log(numArr);
// [99, 89, 79, 69, 59, 49]

// reduce without initial value
// normally executes one lesser iteration
const sumArr = numArr.reduce((accumulateValue, currVal) => {
  console.log('Accumulate Val',accumulateValue);
  console.log('Curr Val', currVal);
  return accumulateValue + currVal; 
  // 1st 99 + 89 --> 188
  // 2nd 188 + 79 --> 267
  // 3rd 267 + 69 --> 336
  // 4th 336 + 59 --> 395
  // 5th 395 + 49 ---> 444
});


console.log('Sum', sumArr);

// reduce with initial value
const sumArr2 = numArr.reduce((accumulateValue, currVal) => {
  console.log('Accumulate Val',accumulateValue);
  console.log('Curr Val', currVal);
  return accumulateValue + currVal; 
  // 0th 0 + 99 --> 99
  // 1st 99 + 89 --> 188
  // 2nd 188 + 79 --> 267
  // 3rd 267 + 69 --> 336
  // 4th 336 + 59 --> 395
  // 5th 395 + 49 ---> 444

}, 10);

console.log(sumArr2); // 



// Input
const subjects = [
  {
    subName: 'English',
    marks: 65,
    maxMark: 70
  },
  {
    subName: 'Science',
    marks: 75,
    maxMark: 80
  },
  {
    subName: 'Maths',
    marks: 90,
    maxMark: 100
  },
  {
    subName: 'Social',
    marks: 90,
    maxMark: 100
  }
];

// Output:
// create an obj { totalmarks: 320, totalMaxMarks: 350 }, then print below
// Score --> 320, Max Mark: 350

const resultObj = subjects.reduce( (accVal, currVal) => {
  return {
    totalMark: accVal.totalMark + currVal.marks,
    totalMaxMark: accVal.totalMaxMark + currVal.maxMark,
  }
}, { totalMark: 0, totalMaxMark: 0 } );

// break down
// 0th --> { totalMark: 0, totalMaxMark: 0 }, { subName: 'English', marks: 65, maxMark: 70 } ---> { totalMark: 65, totalMaxMark: 70 }
// 1th --> { totalMark: 65, totalMaxMark: 70 }, { subName: 'Science', marks: 75, maxMark: 80 } ---> { totalMark: 140, totalMaxMark: 150 }
// .
// 3th --> { totalMark: 230, totalMaxMark: 250 }, { subName: 'Social', marks: 90, maxMark: 100 } ---> { totalMark: 320, totalMaxMark: 350 }


console.log(`Score --> ${resultObj.totalMark}, Max Mark: ${resultObj.totalMaxMark}`);

