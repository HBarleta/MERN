const squareMatrix1 = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]
const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const diagonalDifference = array => {
    let result1 = 0; //result of top left element to bottom right element in the matrix
    let result2 = 0; //result of top right element to bottem left element in the matrix
    let yAxis= 0; // keeps track of which array it is in the matrix 
    let xAxis = 0; // keeps track of which element it is in the Y axis array
    let counter = array.length -1; // tracks the opposite end of Y axis array for results2
    for(let y = 0; y <array.length; y++){
        //first for loop will iterate through array of arrays
        for(let x = 0; x < array[y].length; x++){
            //second for loop will iterate through each element inside the Y axis array
            if(x === xAxis && y === yAxis){
                //conditional to determine which element to add based on X & Yaxis value
                result1 += array[yAxis][xAxis];
                result2 += array[yAxis][counter]
                counter--;
                yAxis++; 
                xAxis++;
            }
        }
    }
    return Math.abs(result1 - result2);
}
console.log(diagonalDifference(squareMatrix1))