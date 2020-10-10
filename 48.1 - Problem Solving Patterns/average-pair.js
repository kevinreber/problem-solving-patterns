/**
 * Write a function called averagePair. Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals
 * the target average. There may be more than one pair that matches the average target.
 *
 * Constraints:
 *
 * Time Complexity: O(N)
 *
 * Examples:
 *
 * averagePair([1, 2, 3], 2.5); // true
 * averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
 * averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
 * averagePair([], 4); // false
 *
 *
 *  The function relies on the fact that the array is sorted
 *  to calculate the running average of every two numbers.
 *  It does this by putting one pointer at the start of the
 *  array and one pointer at the end of the array.
 *
 *  At each point, if the average is less than the target num, we have to
 *  move the left pointer up, while the right can stay put. Otherwise if
 *  the average is greater than the sum, we move the right pointer down.
 *
 *  The function ends either when we've found the correct average, or
 *  the pointers have crossed paths (i.e. when the start is greater than the end),
 *  at which point we can conclude there is no truthy answer.
 */

// add whatever parameters you deem necessary
function averagePair(arr, num) {
	let start = 0; // left pointer
	let end = arr.length - 1; //right pointer

	while (start < end) {
		let average = (arr[start] + arr[end]) / 2;
		// return true if average === num
		if (average === num) {
			return true;
		} else if (average < num) {
			start++;
		} else {
			end--;
		}
	}
	// return false if average !== num
	return true;
}
