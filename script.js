const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display(button.textContent)
    });
});

const screen = document.querySelector('.screen');
screen.textContent = "";

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

function display(btnVal) {
    screen.textContent += btnVal;
    console.log(btnVal);
}

// console.log(operate("/", 6, 2))