let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');
let btn5 = document.querySelector('#btn-5');
let btn6 = document.querySelector('#btn-6');
let btn7 = document.querySelector('#btn-7');
let btn8 = document.querySelector('#btn-8');
let btn9 = document.querySelector('#btn-9');
let btn0 = document.querySelector('#btn-0');
let btnClear = document.querySelector('#clearBtn');
let btnSubtraction = document.querySelector('#btn-subtraction');
let btnAddition = document.querySelector('#btn-addition');
let btnDivision = document.querySelector('#btn-division');
let btnMultiplication = document.querySelector('#btn-multiplication');
let btnEqual = document.querySelector('#btn-equal');
let calcScreen = document.querySelector('.calc-screen');
let btnBack = document.querySelector('#btn-back');

let operation = undefined;
let nr1 = 0;
let nr2 = 0;

btn1.addEventListener('click', onDigitClick);
btn2.addEventListener('click', onDigitClick);
btn3.addEventListener('click', onDigitClick);
btn4.addEventListener('click', onDigitClick);
btn5.addEventListener('click', onDigitClick);
btn6.addEventListener('click', onDigitClick);
btn7.addEventListener('click', onDigitClick);
btn8.addEventListener('click', onDigitClick);
btn9.addEventListener('click', onDigitClick);
btn0.addEventListener('click', onDigitClick);


function onDigitClick(event) {
    let digit = +event.currentTarget.getAttribute("data-number");
    if (operation === undefined) {
        nr1 = nr1 * 10 + digit;
        calcScreen.innerHTML = nr1;
        console.log(nr1);
    } else {
        nr2 = nr2 * 10 + digit;
        calcScreen.innerHTML = nr2;
        console.log(nr2);

    }
}

btnClear.addEventListener('click', function () {
    nr1 = 0;
    nr2 = 0;
    operation = undefined;
    calcScreen.innerHTML = 0;
    console.log(nr1);

});

btnSubtraction.addEventListener('click', onOperationClick);
btnAddition.addEventListener('click', onOperationClick);
btnDivision.addEventListener('click', onOperationClick);
btnMultiplication.addEventListener('click', onOperationClick);

function onOperationClick(event) {
    operation = event.currentTarget.getAttribute("data-operation");
    calcScreen.innerHTML = operation;
    console.log(operation);
}

btnEqual.addEventListener('click', function () {
    let result;
    switch (operation) {
        case "+":
            result = nr1 + nr2;
            break;
        case "-":
            result = nr1 - nr2;
            break;
        case "*":
            result = nr1 * nr2;
            break;
        case "/":
            result = nr1 / nr2;
            break;
        default: alert("Please contact us!");
    }
    calcScreen.innerHTML = result;
})

btnBack.addEventListener('click', function () {
    if (operation === undefined) {
        if (nr1 < 10) {
            nr1 = 0;
        } else {
            nr1 = Math.floor(nr1 / 10);
        }
        calcScreen.innerHTML = nr1;
        console.log(nr1);
    } else {
        if (nr2 < 10) {
            nr2 = 0;
        } else {
            nr2 = Math.floor(nr2 / 10);
        }
        calcScreen.innerHTML = nr2;
        console.log(nr2);
    }
});
