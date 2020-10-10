/**
 * Write a function called isSubsequence which takes in two strings and checks whether
 * the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear
 * somewhere in the second string, without their order changing.
 *
 * Examples:
 *
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 * Constraints:
 *
 * Time Complexity - O(N + M)
 */

// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
	let str1Idx = 0;
	let str2Idx = 0;

	if (!str1) return true;

	// while not exceeding all of str2
	while (str2Idx < str2.length) {
		// if letters match, increment and move to next letter
		if (str2[str2Idx] === str1[str1Idx]) str1Idx++;

		// if reach end of str1 and all match, return true
		if (str1.length === str1Idx) return true;

		// else increment to next letter
		str2Idx++;
	}
	return false;
}
