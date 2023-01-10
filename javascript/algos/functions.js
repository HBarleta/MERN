function callback(x){
    
   const result = x.map(el => el+1)
    
    return result;
}

let arr = [1,2,3,4]

console.log(callback(arr))