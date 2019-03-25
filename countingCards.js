function counted(card)
{
    var countData = 0;

    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
            countData++;
            break;
        case 6:
        case 7:
        case 8:
            countData = 0;
            break;
        case 9:
        case 10:
        case 'h':
        case 'i':
        case 'j':
            countData--;
            break;
    }

    if (countData > 0) {
        return countData+' Positive';
    }
    else {
        return countData+' Negative';
    }
}

console.log(counted(4));
console.log(counted(7));
console.log(counted('j'));