let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    currentInput += ' ' + operator + ' ';
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '';
}

function eraseLast() {
    currentInput = currentInput.trim().slice(0, -1);
    display.innerText = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100'));
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}
