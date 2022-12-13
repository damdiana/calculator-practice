let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');
let btn5 = document.querySelector('#btn-5');
let btn6 = document.querySelector('#btn-6');
let btn7 = document.querySelector('#btn-7');
let btn8 = document.querySelector('#btn-8');
let btn9 = document.querySelector('#btn-9');
let btnClear = document.querySelector('#clearBtn');
let btnSubtraction = document.querySelector('#btn-subtraction');
let btnAddition = document.querySelector('#btn-addition');
let btnDivision = document.querySelector('#btn-division');
let btnMultiplication = document.querySelector('#btn-multiplication');

let operation = undefined;

let nr1 = 0;

let nr2 = 0;



btn1.addEventListener('click', function () {
    if (operation === undefined) {
        nr1 = nr1 * 10 + 1;
        console.log('nr1', nr1);
    } else {
        nr2 = nr2 * 10 + 1;
        console.log('nr2', nr2);
    }
});

btn2.addEventListener('click', function () {
    if (operation === undefined) {
        nr1 = nr1 * 10 + 2;
        console.log('nr1', nr1);
    } else {
        nr2 = nr2 * 10 + 2;
        console.log('nr2', nr2);
    }
});

btn3.addEventListener('click', function () {
    if (operation === undefined) {
        nr1 = nr1 * 10 + 3;
        console.log('nr1', nr1);
    } else {
        nr2 = nr2 * 10 + 3;
        console.log('nr2', nr2);
    }
});

btn4.addEventListener('click', function () {
    if (operation === undefined) {
        nr1 = nr1 * 10 + 4;
        console.log('nr1', nr1);
    } else {
        nr2 = nr2 * 10 + 4;
        console.log('nr2', nr2);
    }
});

btn5.addEventListener('click', function () {
    if (operation === undefined) {
        nr1 = nr1 * 10 + 5;
        console.log('nr1', nr1);
    } else {
        nr2 = nr2 * 10 + 5;
        console.log('nr2', nr2);
    }
});

btn6.addEventListener('click', function () {
    if (operation === undefined) {
        nr1 = nr1 * 10 + 6;
        console.log('nr1', nr1);
    } else {
        nr2 = nr2 * 10 + 6;
        console.log('nr2', nr2);
    }
});

btn7.addEventListener('click', function () {
    if (operation === undefined) {
        nr1 = nr1 * 10 + 7;
        console.log('nr1', nr1);
    } else {
        nr2 = nr2 * 10 + 7;
        console.log('nr2', nr2);
    }
});


btn8.addEventListener('click', function () {
    if (operation === undefined) {
        nr1 = nr1 * 10 + 8;
        console.log('nr1', nr1);
    } else {
        nr2 = nr2 * 10 + 8;
        console.log('nr2', nr2);
    }
});

btn9.addEventListener('click', function () {
    if (operation === undefined) {
        nr1 = nr1 * 10 + 9;
        console.log('nr1', nr1);
    } else {
        nr2 = nr2 * 10 + 9;
        console.log('nr2', nr2);
    }
});

btnClear.addEventListener('click', function () {
    nr1 = 0;
    nr2 = 0;
    operation = undefined;
    console.log(nr1);

});

btnSubtraction.addEventListener('click', function () {
    operation = '-';
    console.log(operation);
});

btnAddition.addEventListener('click', function () {
    operation = '+';
    console.log(operation);
})

btnDivision.addEventListener('click', function () {
    operation = "/";
    console.log(operation);
})

btnMultiplication.addEventListener('click', function () {
    operation = '*';
    console.log(operation);
})

