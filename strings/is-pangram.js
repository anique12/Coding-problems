function isPangram(str) {
  const set = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '' && str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      set[str[i]] = 1;
    }
  }
  console.log(set);
  return Object.keys(set).length === 26 ? 'pangram' : 'not pangram';
}

const output = isPangram('abcddddefghigklmnopqrst  900  uvwxyzj    ');
console.log(output);
