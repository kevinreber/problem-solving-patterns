/**
 * Given an array of integers, and a number, find the number of pairs of integers in the
 * array whose sum is equal to the second parameter. You can assume that there will be no
 * duplicate values in the array.
 *
 * Examples:
 *
 * countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
 * countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
 * countPairs([4,6,2,7], 10) // 1 (4,6)
 * countPairs([1,2,3,4,5], 10) // 0
 * countPairs([1,2,3,4,5], -3) // 0
 * countPairs([0,-4],-4) // 1
 * countPairs([1,2,3,0,-1,-2],0) // 2
 */

// add whatever parameters you deem necessary
function countPairs(nums, num) {
	nums.sort((a, b) => a - b);
	let count = 0;
	let start = 0;
	let end = nums.length - 1;

	while (start < end) {
		let sum = nums[start] + nums[end];
		// if sum equals num, add 1 to count and increment/decrement pointers
		if (sum === num) {
			count++;
			start++;
			end--;
		} else if (sum < num) {
			start++;
		} else {
			end--;
		}
	}
	return count;
}
