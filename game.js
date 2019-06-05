var characters = 'abcdefghijklmnopqrstuvwxyz'
var randomCharacter = Math.floor(Math.random()*character.length())
var guessCharacter = characters[randomCharacter]
var lettersGuessed = ''
var numberOfGuesses = 0
console.log('letter to guess' + guessCharacter)

while(numberOfGuess != 10) {
    var guessedLetter = prompt('Guess a letter that')

    if(lettersGuessed.contains(guessedLetter) {
        console.log('Letter has been guessed try again')
    }
    else if(guessedLetter == (guessCharacter)) {
        console.log('You have guessed the letter correctly')
    }
    else{
        console.log('Sorry incorrect guess agian')
        counter++;
    }
}
