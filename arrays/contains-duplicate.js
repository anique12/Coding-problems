function containsDuplicate(numbers) {
  let dic = {};
  for (let i = 0; i < numbers.length; i++) {
    if (dic[numbers[i]]) {
      return true;
    }
    dic[numbers[i]] = 1;
  }
  return false;
}

const res = containsDuplicate([1, 1]);
console.log(res);
