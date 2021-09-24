function findMinAndMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return { min, max };
}

const output = findMinAndMax([98, 1, 3, 58, 56]);
console.log(output);
