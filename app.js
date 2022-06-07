// Variables
const qwerty = document.querySelector('#qwerty');
let phrases = document.querySelector('#phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const startScreen = document.querySelector('.start');

// Phrases
phrases = ['It takes one to know one',
           'Kill two birds with one stone',
           'Break a leg',
           'Better late than never',
           'A blessing in disguise'
          ];

// Inititialize game 
startGame.addEventListener('click', (e) => {
    startScreen.style.display = 'none';
});

// This function will generate a random phrase as an array of characters 
function getRandomPhrasesAsArray(arr) {
    const generateRandomPhrase = Math.floor (Math.random() * arr.length );
    return (arr[generateRandomPhrase].split(''));   // will return a random phrase as an array of characters
 }  

const phraseArray = getRandomPhrasesAsArray(phrases); // Variable for Random Phrase Character Array

// Game Display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++ ) { 
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
        if (li.textContent !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
    return arr;
}
addPhraseToDisplay(phraseArray)

// Check Letter Function
function checkLetter(button) {
    const letters = document.querySelectorAll('ul li');
    let match = null;
    for (let i = 0; i < letters.length; i++ ){
        const letterContent = letters[i].textContent;
        if (button === letterContent.toLowerCase()) {
            letters[i].classList.add('show');
            match = button;
        }
    }
    return match;
}

// Keyboard Event Listener
qwerty.addEventListener('click', (e) => {
    const button = e.target;
    const buttonContent = button.textContent;
    if (button.tagName === 'BUTTON') {
        button.className = 'chosen'; 
        button.disabled = 'true';
    }  
    const letterFound = checkLetter(buttonContent);
    if (letterFound === null) {
        missed ++;
    }
    checkWin();
});

// // Check Win Function
function checkWin() {
    const letterClass = document.querySelectorAll('.letter');
    const showClass = document.querySelectorAll('.show');
    if (letterClass.length === showClass.length) {
        startScreen.classList.add('win');
        const displayWin = document.querySelector('h2');
        displayWin.textContent = `You won!!!`
        startScreen.style.display ='flex';
    } else if (missed >= 5) {
        startScreen.classList.add('lose');
        const displayLose = document.querySelector('h2');
        displayLose.textContent = `Sorry, Out of Moves!`;
        startScreen.style.display = 'flex';
    }
}
