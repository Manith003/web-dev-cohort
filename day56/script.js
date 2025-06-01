function temp(a){
    if (a === 0) return;
    console.log(a);
    temp(a-1);
}


temp(5);


