function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    if (op == "+")
        return add(a, b);
    else if (op == "-")
        subtract(a, b);
    else if (op == "*")
        multiply(a, b);
    else
        return divide(a, b);
}

console.log(operate("/", 6, 2))