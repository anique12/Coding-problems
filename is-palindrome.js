function isPalindrome(word) {
  let i = 0;
  let j = word.length - 1;
  while (i < j) {
    if (word[i] !== word[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

const output = isPalindrome('madam');
console.log(output);
