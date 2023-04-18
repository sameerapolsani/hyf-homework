let numbers = [1, 2, 3, 4, 5, 6, 9, 1, 3];

/*for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}*/

// using filter findig odd numbers
const OddNumbers = numbers.filter((number) => number % 2 != 0);
// using map function double numbers
const doubleNumbers = OddNumbers.map((number) => number * 2);
console.log(numbers);
console.log(OddNumbers);
console.log("The doubled odd numbers are", doubleNumbers);
