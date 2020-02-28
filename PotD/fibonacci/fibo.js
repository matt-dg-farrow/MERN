function fibonacci (num) {
    let output = [0];
    if(num<=1) {
        console.log(output);
    }else {
        output.push(1);
    do {
        newNum = output[output.length-1] + output[output.length-2];
        if(newNum<num){
        output.push(newNum);
        }
        
    } while (newNum < num)
    console.log(output);
}
}

fibonacci(35);


