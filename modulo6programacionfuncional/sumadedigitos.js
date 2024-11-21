var number = 12345;

var string = number.toString();

var array = string.split('');

console.log(number); // 12345
console.log(string); // '12345'
console.log(array); // ['1', '2', '3', '4', '5']

var number = 12345;

var array = number.toString().split('');

console.log(number); // 12345
console.log(array); // ['1', '2', '3', '4', '5']

var arrayOfNumbers = array.map(function(number) {
    return Number(number);
  })
  
  console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]

  var arrayOfNumbers = array.map(Number);

console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]

var sum = arrayOfNumbers.reduce(function(a, b) {
    return a + b;
  }, 0);
  
  console.log(sum); // 15

  function sumDigits(number) {
    return number
           .toString()
           .split('')
           .map(Number)
           .reduce(function(a, b) {
             return a + b;
           }, 0)
  }
  
  console.log(sumDigits(12345)); // 15