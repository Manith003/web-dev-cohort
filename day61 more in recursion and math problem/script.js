let a=16 , b=24;
console.log(a,b);


for(let i = Math.min(a,b);i>=1; i--){
    if(a%i===0 && b%i===0){
        console.log(i);
        break
    }
}