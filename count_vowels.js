// Problem: Count the number of vowels in a given string.

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}


console.log(countVowels("programming"));
