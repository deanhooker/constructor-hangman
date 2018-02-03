var Letter = function (letter) {
    this.correct = letter;
    this.blank = "_";
}

var Word = function (word) {
    this.word = word;
    this.wordArray = word.split("");
    this.lettersArray = this.createLettersArray(this.wordArray);
}

Word.prototype.createLettersArray = function (wordArray) {
    let letterArray = [];
    for (i = 0; i < wordArray.length; i++) {
        var ltr = new Letter(wordArray[i]);
        letterArray.push(ltr);
    }
    return letterArray;
};

module.exports = Word;