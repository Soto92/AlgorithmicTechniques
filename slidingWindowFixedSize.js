function maxSumSubarray(arr, k) {
  if (arr.length < k) {
    return null;
  }

  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let windowSum = maxSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;
console.log(`The maximum sum of any contiguous subarray of size ${k} is:`);
console.log(maxSumSubarray(arr, k));
