const str1 = "b70a164c32a20c10j3a15";

const expected1 = "a199b70c42j3";

/**
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
// function rehash(s) {}

/*****************************************************************************/

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(n + n(log(n))) linearithmic. The n(log(n)) is from sorting.
 * Space: O(2n) -> O(n) linear. Duplicate storage of str in obj and new str.
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
const rehash = (str) => {
const array = str.split('')
let count = {};
    for(let i = 0; i < array.length; i++ ){
        // console.log(Number(array[i]))
        let currentLetter = ""
        let currentCount = 0;
        if(!Number(array[i]) && !Number(array[i] == 0)){
            count[array[i]] = 0
            currentLetter = array[i]
            // count.array[i] = array[i];

        } else if (Number(array[i]) || Number(array[i]) == 0){
            console.log("This is a number", array[i])
        }
    }
    console.log(count)
}
console.log(rehash(str1));
