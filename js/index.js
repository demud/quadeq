const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadraticEquation(a, b, c);
alert(result);

function solveQuadraticEquation(a, b, c) {
    const d = calcD(a, b, c);
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'x1=' + x1 + ' x2=' + x2;
    }
    else if (d === 0) {
        const x = -b / (2 * a);
        return 'x=' + x;
    }
    return 'No roots'
}

function calcD(a, b, c) {
    return b ** 2 - 4 * a * c;
}
