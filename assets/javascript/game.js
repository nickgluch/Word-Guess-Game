
var breeds = ['german shepard', 'husky', 'golden retriever', 'australian shepard', 'labrador', 'shiba inu',
    'poodle', 'beagle', 'boxer', 'chihuahua'
]
var breedToGuessContainer = document.getElementById("breedToGuess")


var breedToGuess = breeds[Math.floor(Math.random() * breeds.length - 1)];
console.log(breedToGuess);

// generate a random number 


// use number as index to get an word from your array
// save the word on a variable
var breedToGuessPlaceholder = breedToGuess;
// loop thru the variable lenth and append and _ to the container
var placeHolder = "_ ";





function keyHandler() {
    this.onkeydown = null;

    for (i = 0; i < breedToGuessPlaceholder.length; i++) {
        document.getElementById("breedToGuess").append(placeHolder);

    };


};

document.onkeydown = keyHandler;

document.onkeyup = function () {
    this.onkeydown = keyHandler;
    keyHandler = null;

};

var guessedLetters = [];
var guessedLetters = document.getElementById("guessesSoFar");
var correctGuess = [];









//keylistener fuction


class KeyListener {

    keyTyped(KeyEvent, e) {

        if (e === 'breedToGuess'[item]) {

            console.log(KeyListener);
            breedToGuess.append(placeHolder);


        }
        else {
            e.push(guessedLetters);

        }

    }
}


//parts I wasn't able to get to work
//check if letters guessed matched the word to guess
//if letters guessed matched then replace a placeholder with the correct guessed letter to reveal part 
// of word
//if letters dont match then push the guessed letter to already guessed array 
//if they typed all the correct letters then they win
//if they typed wrong letters too many times then lose
//restart game if win or lose
//create reset code







//console.log(breedToGuessPlaceholder);


// var placeHolder = ''
// for idx for the length of the word
    // placeholder += '_ ' 
// var placeHolder = ''
// append the placeholder to the container


//};