/**
 * Given an array of characters with words separated by empty string ''. You have to words.
 * For example, given an array ['p','e','r','f','e','c','t','','m','a','k','e','s','','p','r','a','c','t','i','c','e']
 * The output should be ['p','r','a','c','t','i','c','e','','m','a','k','e',s,'p','e','r','f','e','c','t']
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
  '',
  'm',
  'a',
  'k',
  'e',
  's',
  '',
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e',
];
 */
function reverseSentence(arr) {
  let j = arr.length - 1;
  let i = arr.length - 1;
  let revWords = [];
  let word = [];
  while (j >= 0) {
    if (arr[j] !== '') {
    } else {
      word = arr.slice(j + 1, i + 1);
      revWords.push(...word, '');
      i = j - 1;
    }
    j--;
  }
  word = arr.slice(j + 1, i + 1);
  revWords.push(...word);
  return revWords;
}

arr = [
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
  '',
  'm',
  'a',
  'k',
  'e',
  's',
  '',
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e',
];

const output = reverseSentence(arr);

console.log(output);
