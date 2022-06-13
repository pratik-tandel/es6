// Spread operator with Array
let arr1 = ['HTML', 'CSS', 'JavaScript'];
let arr2 = ['PHP', 'SQL'];

let languageArr = [...arr1, ...arr2];
console.log(languageArr); // [ 'HTML', 'CSS', 'JavaScript', 'PHP', 'SQL' ];



//Spread operator with Object
let obj1 = { language: 'HTML', use: 'frontend' };
let obj2 = { framework: 'Laravel', ext: '.php' };

let languageObj = {...obj1, ...obj2};
console.log(languageObj); // { language: 'PHP', use: 'backend' }

/** Reduce */
// Sum
const array1 = [1, 3, 2, 4, 5, 4, 6, 9, 8, 3];

const sum = array1.reduce((previousValue, currentValue) => {
  console.log('Previous: ', previousValue, 'Current: ', currentValue);
  return previousValue + currentValue;
}, 0);

console.log('Sum: ', sum);

// get max
const maxValue = Math.max(1, 2, 3, 4, 5, 6, 10, 4, 3 ,3 ,3);
console.log('Max value: ', maxValue);

// creating max with reduce
const maximumValue = array1.reduce((previousValue, currentValue) => {
  console.log('Previous: ', previousValue, 'Current: ', currentValue);
  if (previousValue > currentValue) {
    return previousValue;
  } else {
    return currentValue;
  }
});

console.log('Maximum value: ', maximumValue);