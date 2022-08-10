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
    else if (op == "×")
        multiply(a, b);
    else
        return divide(a, b);
}

let num1 = "", num2 = "", op = "", moveToNum2 = false;
const operators = ['+', '-', '×', '÷'];
function display(btnVal) {
    if (btnVal == 'DELETE' || btnVal == 'CLEAR') {
        screen.textContent = "";
        num1 = "";
        num2 = "";
        op = "";
        moveToNum2 = false;
    }
    else {
        screen.textContent += btnVal;
        if ((btnVal == '+' || btnVal == '-' || btnVal == '×' || btnVal == '÷') && num2 != "") {
            
        }
        else if (btnVal == '+' || btnVal == '-' || btnVal == '×' || btnVal == '÷') {
            op = btnVal;
            moveToNum2 = true;
        }
        else if (btnVal == '=') {

        }
        else if (!moveToNum2) {
            num1 += btnVal;
        } 
        else {
            num2 += btnVal;
        }
    }

    // +num1 + +num2
}

// console.log(operate("/", 6, 2))