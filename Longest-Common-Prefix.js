// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Solved using Vertical Method.

/**
 * 
 * @param {string[]} strings
 * @return {string} 
 */
function solve(strings){
    let prefix = '';
    if (strings.length === 0) return prefix;

    for (let i = 0; i < strings[0].length; i++) {
        const character = strings[0][i];
        for (let j = 0; j < strings.length; j++) {
            if (strings[j][i] !== character) return prefix;
        }
        prefix += character;
    }
    console.log(prefix);
    return prefix;
}

solve(
    ["flower","flow","flight"]
);

solve(
    ["dog","racecar","car"]
);