/**
 * @param {number[]} nums - Sorted array of numbers
 * @param {number} target - Target number to find range for
 * @return {number[]} - Array with the starting and ending index of the target in nums, or [-1, -1] if not found
 */
var searchRange = function (nums, target) {
	// Initialize left (L) and right (R) pointers and answer array with default [-1, -1]
	let L = 0, R = nums.length - 1, ans = [-1, -1];

	// First binary search to find the left boundary of the target
	while (L <= R) {
		let mid = Math.floor((L + R) / 2);

		if (nums[mid] === target) {
			ans[0] = mid;
			R = mid - 1;
		} else if (nums[mid] < target) {
			L = mid + 1;
		} else {
			R = mid - 1;
		}
	}

	// Reset pointers to search for the right boundary
	L = 0;
	R = nums.length - 1;

	// Second binary search to find the right boundary of the target
	while (L <= R) {
		let mid = Math.floor((L + R) / 2);

		if (nums[mid] === target) {
			ans[1] = mid;
			L = mid + 1;
		} else if (nums[mid] < target) {
			L = mid + 1;
		} else {
			R = mid - 1;
		}
	}

	return ans;
};
