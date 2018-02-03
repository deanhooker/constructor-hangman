var Letter = function (letter) {
    this.correct = letter;
    this.blank = "_";
}

var NewWord = function (word) {
    this.word = word;
    this.wordArray = word.split("");
    this.lettersArray = this.createLettersArray(this.wordArray);
}

NewWord.prototype.createLettersArray = function (wordArray) {
    let letterArray = [];
    for (i = 0; i < wordArray.length; i++) {
        var ltr = new Letter(wordArray[i]);
        letterArray.push(ltr);
    }
    return letterArray;
};

module.exports = NewWord;