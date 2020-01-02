// using constructor function


// Wait and words are from the data attrib
// txtE is the span element
// with constuc function, you can use this to assign properties
const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';

}