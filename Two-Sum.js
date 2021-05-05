// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have  exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Solved using Hash Table.

/**
 * 
 * @param {number[]} numbers 
 * @param {number} target 
 * @returns {number[]}
 */
function solve(numbers, target) {
    const previousValues = {};

    for (let index = 0; index < numbers.length; index++) {
        const currentNumber = numbers[index];
        const neededValue = target - currentNumber;
        const index2 = previousValues[neededValue];
        if (index2 != null) {
            console.log([index2, index]);
            return [index2, index];
        } else {
            previousValues[currentNumber] = index;
        }
    }
}

solve(
    [2,7,11,15],
    9
); // [0, 1]

solve(
    [3,2,4],
    6
); // [1, 2]

solve(
    [3, 3],
    6
); // [0, 1]