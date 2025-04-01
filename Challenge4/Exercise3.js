function isPrime(num){
    if(num<2) return false;
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num% i === 0){
            return false;
        }
    }
    return true;
}


function checkPrimes(arr){
    return arr.map(isPrime);
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = checkPrimes(numbers);

console.log(result);