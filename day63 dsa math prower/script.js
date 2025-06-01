let n = 20;
checkPrimeInRange(n);

function checkPrimeInRange(n) {
    let isPrime = new Array(n+1).fill(true);
    for(let i=2;i<=Math.floor(Math.sqrt(n));i++){
        if(isPrime[i]=== true){
            for(let j=i*i;j<=n;j+=i){
                isPrime[j] = false;
            }  
        }
    }
    let count = 0;
    for(let i=2;i<isPrime.length;i++){
        if(isPrime[i]) count++;
    }
    console.log(count);
    
}