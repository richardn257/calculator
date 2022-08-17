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
        return subtract(a, b);
    else if (op == "×")
        return multiply(a, b);
    else
        return divide(a, b);
}

let num1 = "", num2 = "", op = "";
const operators = ['+', '-', '×', '÷'];
let oneOp = false;

function display(btnVal) {
    if (btnVal == 'DELETE' || btnVal == 'CLEAR') {
        screen.textContent = "";
        num1 = "";
        num2 = "";
        op = "";
        moveToNum2 = false;
    }
    else {
        if ((btnVal == '+' || btnVal == '-' || btnVal == '×' || btnVal == '÷' || btnVal == '=') && num2 != "") {
            num1 = operate(op, +num1, +num2);
            screen.textContent = num1;
            num2 = "";
            op = btnVal;
        }
        else if ((btnVal == '+' || btnVal == '-' || btnVal == '×' || btnVal == '÷' || btnVal == '=')) {
            if (btnVal != '=' && num1 != '' && !oneOp) {
                op = btnVal;
                oneOp = true;
            }
        }
        else if (op == '') {
            num1 += btnVal;
        } 
        else {
            num2 += btnVal;
        }

        if (btnVal != '=' && num1 != '')
            screen.textContent += btnVal;
    }
}

// console.log(operate("/", 6, 2))