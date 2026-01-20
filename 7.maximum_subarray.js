// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var maxSubArray = function (nums) {
  let curMax = nums[0]; // -2
  let maxima = nums[0]; // -2

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], nums[i] + curMax);
    // curMax = [-2, 1, -2, 4, 3, 5, 6, 1, 5]
    maxima = Math.max(curMax, maxima);
  }

  return maxima;
};
