// for loop

var arr = [10, 20, 30, 40]

for(var i=0;i<arr.length; i++) {
  console.log(arr[i]);
}

for(var num of arr ) {
  console.log(num);
}

// while

var i = 0;
while(i < arr.length) {
  console.log(arr[i]);
  i += 2;
}


// Apple: 50, Orange: 25, Papaya: 25, Mango: 50

// Ammount: 100, Apple: 1, Orange: 1, Mango: 1
// Input:
// Line 1 -> amount
// Apple 1 --> no of apples to Buy
// Orange 1
// Mango 1
// Papaya 0
  // 100 
  // Apple 1
  //
// Output: Can You buy this with the given ammount?
// true ---> 'YES'
// false ---> 'NO'

const amount = 125;
const fruits = ['Apple', 'Orange', 'Mango', 'Papaya'];
const buyArr = [1, 1, 1, 0]; // array of quantities

const apple = 50;
const orange = 25;
const mango = 50;
const papaya = 25;

var i = 0;
var expenditure = 0;

var flag = true;

while (i < 4) {
  switch(fruits[i]) {
    case 'Apple':
      expenditure += apple * buyArr[i];
      break;
    case 'Orange':
      expenditure += orange * buyArr[i];
      break;
    case 'Mango':
      expenditure += mango * buyArr[i];
      break;
    case 'Papaya':
      expenditure += papaya * buyArr[i];
      break;
    default:
      expenditure += 0
  }
  if ( expenditure > amount) {
    flag = false;
  }
  i += 1;
}


console.log(expenditure);

if (flag) {
  console.log('YES');
} else {
  console.log('NO');
}


