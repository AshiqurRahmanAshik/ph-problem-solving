// Problem: Calculate the factorial of a given number.
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Example
console.log(factorial(5)); // 120
