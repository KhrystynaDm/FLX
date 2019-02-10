function getMin (...arr){
    let arg = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arg) {
            arg = arr[i];
        }
    }
    return arg;
}
getMin(3, 0, -2, -7);