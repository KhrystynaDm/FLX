
const pipe = (x, ...fns) => () => fns.reduce((prev, func) => func(prev), x);

function addTen(x) {
    return x + 1;
}

const pipeFunction = pipe(5, addTen, addTen, addTen, addTen, addTen);

console.log(pipeFunction());