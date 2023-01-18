
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];


function orderedMultisetUnion(sortedA, sortedB) {
    if (sortedA.length === 0 || sortedB.length === 0) {
        return sortedA.concat(sortedB)
    }
    hashMapA = {}
    hashMapB = {}
    output = []
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] in hashMapA) {
            hashMapA[sortedA[i]].push(sortedA[i])
        } else {
            hashMapA[sortedA[i]] = [sortedA[i]]
        }
    }
    for (let i = 0; i < sortedB.length; i++) {
        if (sortedB[i] in hashMapB) {
            hashMapB[sortedB[i]].push(sortedB[i])
        } else {
            hashMapB[sortedB[i]] = [sortedB[i]]
        }
    }
    for (const key in hashMapA) {
        if (key in hashMapB) {
            if (hashMapA[key].length > hashMapB[key].length) {
                output.push(...hashMapA[key])
            } else {
                output.push(...hashMapB[key])
            }
        } else {
            output.push(...hashMapA[key])
        }
    }
    for (const key in hashMapB) {
        if (output.indexOf(hashMapB[key][0]) === -1) {
            output.push(...hashMapB[key])
        }
    }
    return output.sort((a, b) => a - b)
}

console.log(orderedMultisetUnion(nums1A, nums1B));
console.log(orderedMultisetUnion(nums2A, nums2B));
console.log(orderedMultisetUnion(nums3A, nums3B));
console.log(orderedMultisetUnion(nums4A, nums4B));