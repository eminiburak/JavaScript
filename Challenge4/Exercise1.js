function chunkArray(arr, chunkSize) {
    const result = [];
    
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize)); 
     }
    
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); 
