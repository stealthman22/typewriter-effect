/* // using constructor function


// Wait and words are from the data attrib
// txtE is the span element
// with constuc function, you can use this to assign properties
const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;

}

// Type Method
TypeWriter.prototype.type = function () {
    // Current index of word
    const current = this.wordIndex % this.words.length;

    // Get text of current word
    const fullTxt = this.words[current]

    //  Check if deleting
    if (this.isDeleting) {
        // Remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        // Add a character
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    // Insert txt value into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    // Deleting typespeed
    if (this.isDeleting) {
        typeSpeed /= 2
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting == true;
    } else if (this.isDeleting && this.txt === '') {
        // Set delete to false again
        this.isDeleting = false;
        // Move to the next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
}

// init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    // convert from string to objects
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // init Typewriter
    new TypeWriter(txtElement, words, wait)
}
 */

// init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    // convert from string to objects
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // init Typewriter
    new TypeWriter(txtElement, words, wait)
}

// Using ES6 Class Syntax

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }


    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;

        // Get text of current word
        const fullTxt = this.words[current];

        //  Check if deleting
        if (this.isDeleting) {
            // Remove character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add a character
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt value into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 200;

        // Deleting typespeed
        if (this.isDeleting) {
            typeSpeed /= 2
        }

        // If word is complete
        /* if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting == true;
        } else if (this.isDeleting && this.txt === '') {
            // Set delete to false again
            this.isDeleting = false;
            // Move to the next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        } */


        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 200;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


// init on DOM Load
document.addEventListener('DOMContentLoaded', init);




/*



class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}   */