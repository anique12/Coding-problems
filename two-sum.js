/**
 * This problem was recently asked by Google.
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * Bonus: Can you do this in one pass?
 */
function twoSum(nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    if (Object.keys(seen).length !== 0 && seen[nums[i]] !== undefined) {
      return true;
    }
    const compliment = target - nums[i];
    seen[compliment] = i;
  }
  return false;
}

console.log(twoSum([3, 2, 1], 6));
