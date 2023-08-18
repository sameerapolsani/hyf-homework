// parse command line arguments
const arguments = process.argv.slice(2);
// define function average
function calculateAverage(numbers) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const arg = numbers[i];
    const num = parseFloat(arg);
    if (!isNaN(num)) {
      sum += num;
      count++;
    }
  }
  return count > 0 ? sum / count : 0;
}
//  Call the function and print the average
const average = calculateAverage(arguments);
console.log("Average:", average);
