/**
 * Write a function called constructNote, which accepts two strings, a message and some letters.
 * The function should return true if the message can be built with the letters that you are given;
 * otherwise, it should return false.
 *
 * Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
 *
 * Constraints:
 *
 * Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
 *
 * Examples:
 *
 * constructNote('aa', 'abc') // false
 * constructNote('abc', 'dcba') // true
 * constructNote('aabbcc', 'bcabcaddff') // true
 */

// add whatever parameters you deem necessary
function constructNote(message, letters) {
	// get frequency of chars in message and letter
	const messageFreq = {};
	const lettersFreq = {};

	// store count of char frequency in messages
	for (let char of message) {
		messageFreq[char] = messageFreq[char] += 1 || 1;
	}

	// store count of char frequency in letters
	for (let char of letters) {
		lettersFreq[char] = lettersFreq[char] += 1 || 1;
	}

	// compare count of letterFreq char in messageFreq
	for (let char in messageFreq) {
		// if letter does not exist
		if (!lettersFreq[char]) return false;

		// if frequency of char in messageFreq is greater than char in lettersFreq
		if (messageFreq[char] > lettersFreq[char]) return false;
	}
	return true;
}
