function findPairs(numbers, target) {
  const complements = new Set();
  const validPairs = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const complement = target - currentNumber;

    if (complements.has(complement)) {
      validPairs.push([currentNumber, complement]);
    }

    complements.add(currentNumber);
  }

  return validPairs;
}

module.exports = findPairs;
