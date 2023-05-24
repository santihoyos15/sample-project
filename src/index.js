const findPairs = require('./findPairs');

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Invalid number of arguments. Please provide an array and a number.');
  process.exit(1);
}

const numbers = args[0].split(',').map(Number);

const target = Number(args[1]);

const result = findPairs(numbers, target);

// Output the result
console.log(result);
