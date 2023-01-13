/* 
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

    Create a function that uses yesterday’s partition to fully sort an array
    in-place.

    Unstable sort.
    
    Time Complexity
        - Best: O(n log(n)) linearithmic.
        - Average: O(n log(n)) linearithmic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.

    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
        last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 5, 2, 2, 7];
const expected3 = [2, 3, 3, 3, 6,, 7, 8, 11, 14];

const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(origArray) {
    if(origArray.length < 2 ){
        return origArray;
    }
    let pivot = origArray[0];
    console.log( " this is the pivot " + pivot);
    let right = [];
    let left = [];
    let newArr = [];
    for(let i = 0; i < origArray.length; i++){
        if(origArray[i] > pivot){
            right.push(origArray[i]);
        } else if (origArray[i] < pivot){
            left.push(origArray[i])
        } 
    }
    console.log("this is greater than pivot " + right)
    console.log("this is less than pivot " + left)
    return newArr.concat(quickSort(left),pivot,quickSort(right));
}
console.log(quickSort(nums3))

// pick first element as pivot
// split array into 2 subarrays, left will be any element lower in value than pivot, right will be any element higher in value
// this will continue to split arrays recursively until only 1 element left
// base case when array.length is == 0;
// 


/*****************************************************************************/