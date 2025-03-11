// You are given two rotated sorted arrays, nums1 and nums2, and a target integer "k".
// Use Javascript to find all pairs of two numbers (one from each array) whose sum equals
// the target and return the list. Assume each input array does not contain duplicate elements
// and both are of the same length.

let nums1 = [4, 5, 6, 7, 0, 1];

let nums2 = [3, 9, 10, 11, 12, 19];

let k = 13;

function findPairs(nums1, nums2, k) {
  let pairs = [];
  let setNums2 = new Set(nums2);

  for (let num of nums1) {
    const complement = k - num;
    if (setNums2.has(complement)) {
      pairs.push([num, complement]);
    }
  }
  return pairs;
}

console.log(findPairs(nums1, nums2, k));
