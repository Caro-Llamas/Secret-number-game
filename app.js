
let secretNumber = 1;
let attempts = 0;
let sortedNumbersList = [];
let maxNumber = 10;

console.log(document.getElementById('userNumber'));

function editElementText(element, text){
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
}

//this function is called when the button Try is clicked
function checkNumberGiven(){
    let userNumber = parseInt(document.getElementById('userNumber').value);
    if(userNumber === secretNumber){
        editElementText('p', `You guessed right on ${attempts} ${(attempts === 1) ? 'attempt' : 'attempts'}! `);
        document.getElementById('restart').removeAttribute('disabled');
    }else{
        if(userNumber > secretNumber){
            editElementText('p', `The secret number is less than ${userNumber}.`);
        }else{
            editElementText('p', `The secret number is greater than ${userNumber}`);
        }
        attempts++;
        clearTextBox();
    }
}

function clearTextBox(){
    document.querySelector('#userNumber').value = '';
}

function secretNumberGenerator() {
    let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;

    if(sortedNumbersList.length == maxNumber){
        editElementText('p', 'All numbers had been sorted! \nPress F5.');
    }else{
        //if the generated number is on the List, returns another generated number:
        if(sortedNumbersList.includes(generatedNumber)){
            return secretNumberGenerator();
        }else{ //if not, the number is added to the end of the List.
            sortedNumbersList.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function startNewGameConditions(){
    editElementText('h1', 'Secret Number Game');
    editElementText('p', `Give me a number from 1 to ${maxNumber}: `);
    secretNumber = secretNumberGenerator();
    attempts = 1;
}

//this function is called when the button New Game is clicked
function restartGame() {
    clearTextBox();
    startNewGameConditions();
    document.getElementById('restart').setAttribute('disabled', true);
}

startNewGameConditions();
