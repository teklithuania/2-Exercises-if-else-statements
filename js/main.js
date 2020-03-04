// What number's bigger?


// Write a function named greaterNum that:
    // takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
    // Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

    function greaterNum(num1, num2) {
        if (num1 > num2) {
            return num1
        } else {
            return num2
        }
    }

    console.log(greaterNum(5, 10));
    
    console.log('------------------');
    
    // The World Translator
    
    //Write a function named helloWorld that:
    // takes 1 argument, a language code (e.g. "es", "de", "en")
    // returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
    // Call that function for each of the supported languages and log the result to make sure it works.
    
    function helloWorld(lang) {
        if (lang == 'lt') {
            return 'Sveikas pasauli!';
        } else if (lang == 'pl') {
            return 'Czecs calemu swiatu!';
        } else if (lang == 'uk') {
            return 'Hello world!';
        } else {
            return 'What are you saying?'
            
        }
    }
    console.log(helloWorld('lt'));
    console.log(helloWorld('uk'));
    console.log(helloWorld('pl'));
    console.log(helloWorld('es'));
    
    console.log('------------------');
    
    // The Grade Assigner
    
    // Write a function named assignGrade that:
    // takes 1 argument, a number score.
    // returns a grade for the score, either "A", "B", "C", "D", or "F".
    // Call that function for a few different scores and log the result to make sure it works.
    
    function assignGrade(num1) {
        if (num1 == 10) {
            return 'A grade'
        } else if (num1 == 9) {
            return 'A grade'
        } else if (num1 >= 11) {
            return 'Error, check value!'
        } else if (num1 >= 7) {
            return 'B grade'
        } else if (num1 >= 5) {
            return 'C grade'
        } else if (num1 >= 3) {
            return 'D grade'
        } else if (num1 >= 1) {
            return 'F grade'
        } else {
            return 'You are not a student!'
        }
    }
    console.log('You got a ' + assignGrade(9));
    console.log('You got a ' + assignGrade(2));
    console.log('You got a ' + assignGrade(7));
    console.log('You got a ' + assignGrade(4));
    console.log('You got a ' + assignGrade(5));
    console.log('You got a ' + assignGrade(6));
    console.log('You got a ' + assignGrade(3));
    console.log('You got a ' + assignGrade(8));
    console.log('You got a ' + assignGrade(1));
    console.log('You got a ' + assignGrade(10));
    console.log(assignGrade(365));
    console.log(assignGrade('h'));
    
    console.log('------------------');
    
    //Second example
    
    function assignGrade2(number1) {
        if (number1 > 90) {
            return 'A';
        } else if (number1 > 80) {
            return 'B';
        } else if (number1 > 70) {
            return 'C';
        } else if (number1 > 65) {
            return 'D';
        } else {
            return 'F';
        }
    }
    
    console.log('You got a ' + assignGrade2(200));
    console.log('You got a ' + assignGrade2(65));
    
    console.log('------------------');

// The Pluralizer

// Write a function named pluralize that:
    // takes 2 arguments, a noun and a number.
    // returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "geese" and "geese".

function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}

console.log('I have ' + pluralize('dog', 0) + '.');
console.log('I have ' + pluralize('elephant', 1) + '.');
console.log('I have ' + pluralize('lion', 2) + '.');
console.log('I have ' + pluralize('sheep', 22) + '.');
