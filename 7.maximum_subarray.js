var maxSubArray = function (nums) {
  let curMax = nums[0];
  let maxima = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], nums[i] + curMax);
    maxima = Math.max(curMax, maxima);
  }

  return maxima;
};
