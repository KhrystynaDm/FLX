function reverseNumber(strNumber) {
    // split() returns an array on which reverse() and join() can be applied
    let strReverseParse, strReverse;
    strReverse = strNumber.toString().split('').reverse().join('');
    strReverseParse = parseInt(strReverse);
    if (strNumber < 0) {
        strReverseParse = strReverseParse * (-1);
    }
    return strReverseParse;
}

reverseNumber(123);