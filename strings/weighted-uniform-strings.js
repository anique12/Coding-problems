function weightedUniformStrings(str, queries) {
  let set = {};
  set[str.charCodeAt(0) - 96] = str[0];
  let sameChars = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === sameChars[0]) {
      sameChars += str[i];
      set[(str.charCodeAt(i) - 96) * sameChars.length] = sameChars;
    } else {
      set[str.charCodeAt(i) - 96] = str[i];
      sameChars = str[i];
    }
  }

  queries = queries.map((weight) => {
    return set[weight] !== undefined ? 'yes' : 'no';
  });

  console.log(set);
  return queries;
}

const output = weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10]);

console.log(output);
