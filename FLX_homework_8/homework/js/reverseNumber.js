function reverseNumber(strNumber) {
    let strReverseParse, strReverse;
    strReverse = strNumber.toString().split('').reverse().join('');
    strReverseParse = parseInt(strReverse);
    if (strNumber < 0) {
        strReverseParse = strReverseParse * (-1);
    }
    return strReverseParse;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);