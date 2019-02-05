let a = Number(prompt("Please enter value a")),
    b = Number(prompt("Please enter value b")),
    c = Number(prompt("Please enter value c")), resultX, resultX1, resultX2;


if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    const discriminant = Math.pow(b, 2) - (4 * a * c);
    const sqrDiscriminant = Math.sqrt(discriminant);
    if (discriminant < 0) {
        alert('No solution');
    } else if (discriminant === 0) {
        resultX = ((-b - sqrDiscriminant) / (2 * a));
        alert("x1,x2: " + resultX);
    } else if (discriminant > 0) {
        resultX1 = ((-b + sqrDiscriminant) / (2 * a));
        resultX2 = ((-b - sqrDiscriminant) / (2 * a));
        alert("x1:" + resultX1 + " x2:" + resultX2);
    }
} else {
    alert('Invalid input data');
}


