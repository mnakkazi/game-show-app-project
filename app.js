// Variables
const qwerty = document.querySelector('#qwerty');
let phrases = document.querySelector('#phrase');
const missed = 0;
const startGame = document.querySelector('.btn__reset');
const startScreen = document.querySelector('.start');
const button = document.querySelectorAll('button');

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
    for (let i = 0; i <= arr.length; i++ ) { 
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

// Check Letter Function
function checkLetter() {
    addEventListener('click', (e) => {
        const letters = document.querySelector('li');
        let match = null;
        for (let i = 0; i <= letters.length; i++ ){
            if (button === letters[i]) {
                li.ClassName = 'show';
                match += button.value;
            }
        }
    });
    return match;
}

// Keyboard Event Listener
qwerty.addEventListener('click', (e) => {
    const letterFound = li.className = 'chosen';
    const disabled = letterFound.attr('disabled', true);
    checkLetter(letterFound);
});

// Check Win Function
function checkWin() {}