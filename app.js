/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let mathOperations = [];
/*------------------------ Cached Element References ------------------------*/

const numberButtonEls = document.querySelectorAll('.button.number');

const operatorButton = document.querySelectorAll('.button.operator');

const clearButton = document.querySelector('.button.clear');

const display = document.querySelector('.display');

const equalButton = document.querySelector('.button.equals');

console.log(display);
console.log(numberButtonEls);
console.log(clearButton);
console.log(operatorButton);
console.log(equalButton);
/*-------------------------------- Functions --------------------------------*/

function clearAction() {
    mathOperations = [];
    console.log(mathOperations);

    display.textContent = '0';
};

function equalAction() {
    let calculation = eval(numbers);
    console.log(calculation);

    display.textContent = calculation
};

/*----------------------------- Event Listeners -----------------------------*/

display.textContent = '0';

numberButtonEls.forEach((numberButton) => {
// add eventlistener to every number button
    numberButton.addEventListener('click', (event) => {
        
        // get the number
        console.log(event.target.innerText);
        let value = event.target.innerText 
        
        // add the number to an array
        mathOperations.push(value);
        console.log(mathOperations);

        // turn the array into a continuous number
        numbers = mathOperations.join('')
        console.log(numbers)

        // show the numbers on the display screen
        display.textContent = numbers
    });
});


// just do the exact same thing for the operator buttons??? 
operatorButton.forEach((operator) => {
    // add eventlistener to every number button
        operator.addEventListener('click', (event) => {
            
            // get the operator
            console.log(event.target.innerText);
            let equationOperator = event.target.innerText 
            
            // add the number to an array
            mathOperations.push(equationOperator);
            console.log(mathOperations);
    
            // turn the array into a continuous number
            numbers = mathOperations.join('')
            console.log(numbers)
    
            // show the numbers on the display screen
            display.textContent = numbers
        });
    });

clearButton.addEventListener('click', clearAction);

equalButton.addEventListener('click', equalAction)


