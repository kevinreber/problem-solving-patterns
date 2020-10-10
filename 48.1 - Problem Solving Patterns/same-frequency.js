/**
 * Write a function called sameFrequency. Given two positive integers, find out if the
 * two numbers have the same frequency of digits.
 *
 * Examples:
 *
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 * Constraints
 *
 * Time Complexity - O(N + M)
 */

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	// turns numbers to string so we can check frequency
	const str1 = num1.toString();
	const str2 = num2.toString();

	if (str1.length !== str2.length) return false;

	let count1 = {};
	let count2 = {};

	// count frequency of char
	for (let char of str1) {
		count1[char] = (count1[char] || 0) + 1;
	}

	for (let char of str2) {
		count2[char] = (count2[char] || 0) + 1;
	}

	// compare frequencies
	for (let key in count1) {
		if (count1[key] !== count2[key]) return false;
	}
	return true;
}
