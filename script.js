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
    if (b != '0')
        return a / b;
    alert("You can't divide by 0")
    return a;
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
let oneOp = false, displayOp = true;

function display(btnVal) {
    if (btnVal == 'DELETE' || btnVal == 'CLEAR') {
        screen.textContent = "";
        num1 = "";
        num2 = "";
        op = "";
        moveToNum2 = false;
        oneOp = false;
    }
    else {
        if ((btnVal == '+' || btnVal == '-' || btnVal == '×' || btnVal == '÷' || btnVal == '=') && num2 != "") {
            num1 = operate(op, +num1, +num2);
            screen.textContent = num1;

            if (num2 != '0') {
                op = btnVal;
                if (btnVal != '=')
                    screen.textContent += btnVal;
            }
            else {
                screen.textContent += op;
            }
            oneOp = false;
            num2 = "";
        }
        else if ((btnVal == '+' || btnVal == '-' || btnVal == '×' || btnVal == '÷' || btnVal == '=')) {
            if (btnVal != '=' && num1 != '' && !oneOp) {
                op = btnVal;
                oneOp = true;
                screen.textContent += btnVal
            }
        }
        else if (op == '=') {
            num1 = btnVal;
            screen.textContent = btnVal;
            op = '';
        }
        else if (op == '') {
            num1 += btnVal;
            screen.textContent += btnVal
        }
        else {
            num2 += btnVal;
            screen.textContent += btnVal
        }
    }
}
