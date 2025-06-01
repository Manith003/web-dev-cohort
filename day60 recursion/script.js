function temp(n){
    if(n===0) return; 
    temp(n-1);
    console.log(n);
}

temp(5);