numToString(21);


function numToString(num){

    let numText = [];
    const hunDigit = (num - num%100)/100;
    const tenDigit = (num%100 - num %10)/10;
    const unitDigit = (num%10);


    
    if (num<=10) {
        numberPrinter(num);
    } else if (10<num<20) {
        teensPrinter(num);
    } else if (20<num<100) {
        console.log(tenDigit);
        tensPrinter(tenDigit);
        if(unitDigit !=0){
            unitsPrinter(unitDigit);
        }
    } else if (100<num<999) {
        unitsDigit(unitsDigit);
        numText.push(' hundred');
        if (tenDigit!=0) {
            numText.push(' and ')
            tensPrinter(tenDigit);
            if(unitsDigit!=0){
                unitPrinter(unitDigit);
            }
        }
    }

    function tensPrinter(number) {
        if(number == 2) {
            numText.push('twenty ');
        } else if(number == 3) {
            numText.push('thirty ');
        } else if(number == 4) {
            numText.push('fourty ');
        } else if(number == 5) {
            numText.push('fifty ');
        } else if(number == 6) {
            numText.push('sixty ');
        } else if(number == 7) {
            numText.push('seventy ');
        } else if(number == 8) {
            numText.push('eighty ');
        } else if(number == 9) {
            numText.push('ninety ');
        }
    }

    function teensPrinter(number){
    if (num==11){
        numText.push('eleven');
    } else if (num==12){
        numText.push('twelve');
    } else if (num==13){
        numText.push('thirteen');
    } else if (num==14){
        numText.push('fourteen');
    } else if (num==15){
        numText.push('fifteen');
    } else if (num==16){
        numText.push('sixteen');
    } else if (num==17){
        numText.push('seventeen');
    } else if (num==18){
        numText.push('eighteen');
    } else if (num==19){
        numText.push('nineteen');
    }
    }

    function unitsPrinter(number){
        if (number == 0) {
            numText.push('zero');
        } else if(number == 1) {
            numText.push('one');
        } else if(number == 2) {
            numText.push('two');
        } else if(number == 3) {
            numText.push('three');
        } else if(number == 4) {
            numText.push('four');
        } else if(number == 5) {
            numText.push('five');
        } else if(number == 6) {
            numText.push('six');
        } else if(number == 7) {
            numText.push('seven');
        } else if(number == 8) {
            numText.push('eight');
        } else if(number == 9) {
            numText.push('nine');
        } else if(number == 10) {
            numText.push('ten');
        }

    }
    console.log(numText);

}


