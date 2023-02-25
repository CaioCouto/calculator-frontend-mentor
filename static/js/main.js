import Calculator from "./classes/Calculator.js";
import ThemeSelector from "./classes/ThemeSelector.js";

const calc = new Calculator();
let themeSelector = new ThemeSelector();
const visorResult = document.querySelector('.main-section-result');

function showOnVisor(text) {
    if(text.length > 19) return visorResult.textContent = 'Overflow. Press RESET'
    visorResult.textContent = parseFloat(text).toLocaleString('en');
}

function handleSpecialKeys(key, actualNumber) {
    let r;
    switch(key){
        case '=':
            r = calc.makeOperation();
            calc.reset();
            break;
        case 'RESET':
            r = calc.reset();
            break;
        default: 
            calc.delete();
            r = actualNumber;
            break;
    }
    return r;
}

function handleOperationKeys(keyPressed) {
    let r = '0';
    if(calc.number2) {
        calc.number1 = calc.makeOperation().toString();
        calc.delete();
        r = calc.number1;
    }
    else if(!calc.number1) { calc.number1 = '0'; }
    calc.operation = keyPressed;
    return r;
}

function handleNumbersAndDots(operationWasSelected, keyPressed) {
    let r;
    if (operationWasSelected) {
        calc.number2 += keyPressed;   
        r = calc.number2;
    }
    else {
        calc.number1 += keyPressed;
        r = calc.number1;
    } 
    return r
}

function handleKeyClick(e) {
    let visorText = visorResult.textContent || '0';

    const keyPressed = e.target.textContent;
    const isNumber = keyPressed.search(/[\d]/) !== -1;
    const isDot = keyPressed === '.';
    const isOperationKey = 'x+-/'.includes(keyPressed);
    const isSpecialKey = keyPressed === 'DEL' || keyPressed === 'RESET' || keyPressed === '=' ;
    const operationWasSelected = calc.operation.length > 0;
    const actualNumber = operationWasSelected ? calc.number2 : calc.number1;
    const isNotFloat = actualNumber.search(/\./) === -1;
    const isNotEmpty = actualNumber.length > 0;
    
    if(isSpecialKey) { visorText = handleSpecialKeys(keyPressed, actualNumber, visorText) }
    else if (isOperationKey) { visorText = handleOperationKeys(keyPressed, operationWasSelected) }
    else if (isNumber || (isDot && isNotFloat && isNotEmpty)) { visorText = handleNumbersAndDots(operationWasSelected, keyPressed) }

    showOnVisor(visorText);
}

function changePageTheme() {
    themeSelector.changeTheme();
    // const elements = document.querySelectorAll
}

const keys = document.querySelectorAll('.main-section-keyboardRow-key');
const themeSwitch = document.querySelector('.main-section-headerSwitch');

keys.forEach(key => key.addEventListener('click', handleKeyClick));

themeSwitch.addEventListener('click', changePageTheme);