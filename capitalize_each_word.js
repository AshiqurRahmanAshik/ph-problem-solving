// Problem: Capitalize the first letter of each word in a given string.

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}

// Example
console.log(capitalizeWords("hello world")); // "Hello World"
