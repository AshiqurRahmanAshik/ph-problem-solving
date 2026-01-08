// Problem: Find all even numbers in an array.
function findEvenNumbers(arr) {
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

// Example
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]
