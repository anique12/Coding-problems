/**
 * Approach: It store all the characters in first array with thier counts into a map. Then for the second array it loops through and check if
 * given element is present in our charCount map. If it is present and have count greater than 0, it decrease the value by one then.
 * @param { string } str1
 * @param { string } str2
 * @returns { boolean } weather two string are anagram or not.
 */
function isAnagram(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  if (str1.length !== str2.length) {
    return false;
  }

  let charCount = {};

  for (let i = 0; i < str1.length; i++) {
    if (charCount[str1[i]] !== undefined) {
      charCount[str1[i]] += 1;
    } else {
      charCount[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (charCount[str2[i]] === undefined || charCount[str2[i]] === 0) {
      return false;
    } else {
      charCount[str2[i]] -= 1;
    }
  }
  return true;
}

function withNaitveJS(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return true;
  }
  let sortedStr1 = str1.split('').sort().join();
  let sortedStr2 = str2.split('').sort().join();
  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}

/**
 * Alogrithm to find if two string are anagram with brute force approach.
 * @param { string } str1
 * @param { string } str2
 * @returns { boolean } weather two string are anagram or not.
 */
function withBruteForce(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return true;
  }
  for (let i = 0; i < str1.length; i++) {
    let hasFound = false;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        str1 = replaceChar(str1, i);
        str2 = replaceChar(str2, j);
        hasFound = true;
        break;
      }
    }
    if (!hasFound) return false;
  }
  return true;
}

/**
 * This function replace a character with '#' in the given string.
 * @param { string } str to replace char at index.
 * @param { number } index at which '#' to be placed.
 * @returns { string }
 */
function replaceChar(str, index) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i !== index) {
      newStr += str[i];
    } else {
      newStr += '#';
    }
  }
  return newStr;
}

const output = isAnagram('abva', 'baav');
console.log(output);
