/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 const hammingWeight = (n) => {
	let count = 0;

	while (n !== 0) {
		count++;
		n = n & (n - 1);
	}

	return count;
};


// n = 5 --> 101

// n = n & (n - 1) (dropping LSB)
// n = 101 & (100) = 100

