/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let L = 0, R = n - 1, ans = -1;

		while (L <= R) {
			let mid = Math.floor((L + R) / 2);
			let number = mid + 1;

			if (isBadVersion(number)) {
				ans = number;
				R = mid - 1;
			} else {
				L = mid + 1;
			}
		}

		return ans;
	};
};
