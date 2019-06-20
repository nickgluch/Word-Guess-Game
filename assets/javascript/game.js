
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
var placeHolder = '_ ';









document.onkeyup = function () {
    for (i = 0; i < breedToGuessPlaceholder.length; i++) {
        document.getElementById("breedToGuess").append(placeHolder);










//console.log(breedToGuessPlaceholder);


// var placeHolder = ''
// for idx for the length of the word
    // placeholder += '_ ' 
// var placeHolder = ''
// append the placeholder to the container


//};