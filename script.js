let display = document.getElementById('display');
let currentInput = '';
let memory = 0;

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(operator) {
    if (currentInput !== '' && !isNaN(currentInput.slice(-1))) {
        currentInput += operator;
        updateDisplay(currentInput);
    }
}

function appendDecimal() {
    let parts = currentInput.split(/[\+\-\*\/]/);
    if (!parts[parts.length - 1].includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay('0');
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        updateDisplay(result);
        currentInput = result.toString();
    } catch (error) {
        updateDisplay('Error');
        currentInput = '';
    }
}

function updateDisplay(value) {
    display.textContent = value;
}

function calculateSquareRoot() {
    let parts = currentInput.match(/-?\d+(\.\d+)?$/);
    if (parts) {
        let value = parseFloat(parts[0]);
        if (value >= 0) {
            let result = Math.sqrt(value);
            currentInput = currentInput.replace(parts[0], result.toString());
            updateDisplay(currentInput);
        } else {
            updateDisplay('Error');
            currentInput = '';
        }
    }
}

function calculatePercentage() {
    let value = parseFloat(currentInput);
    if (!isNaN(value)) {
        let result = value / 100;
        currentInput = result.toString();
        updateDisplay(currentInput);
    } else {
        updateDisplay('Error');
    }
}

function calculateReciprocal() {
    let value = parseFloat(currentInput);
    if (!isNaN(value) && value !== 0) {
        let result = 1 / value;
        currentInput = result.toString();
        updateDisplay(currentInput);
    } else {
        updateDisplay('Error');
    }
}

// Memory functions
function memoryAdd() {
    let value = parseFloat(currentInput);
    if (!isNaN(value)) {
        memory += value;
    }
}

function memorySubtract() {
    let value = parseFloat(currentInput);
    if (!isNaN(value)) {
        memory -= value;
    }
}

function memoryRecall() {
    currentInput = memory.toString();
    updateDisplay(currentInput || '0');
}

function memoryClear() {
    memory = 0;
}

// Remove the unnecessary event listener handling for buttons
