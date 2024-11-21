function multiplyByTwo(numbers) {
    var multipliedNumbers = [];

    for(var i = 0; i < numbers.length; i++) {
      multipliedNumbers.push(numbers[i] * 2);
    }

    return multipliedNumbers;
}

var input = [1, 3, 4, 7, 2, 1, 9, 0];

var output = multiplyByTwo(input);

console.log(input); // [1, 3, 4, 7, 2, 1, 9, 0]
console.log(output);  // [2, 6, 8, 14, 4, 2, 18, 0]