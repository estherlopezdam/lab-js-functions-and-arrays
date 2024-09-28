// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else if (n2 > n1) {
        return n2;
    } else {
        return n1;
    }


}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    let longuestWord = null;
    for(let i = 0; i < arrayOfWords.length; i++) {
        const currentWord = arrayOfWords[i];
        if (!longuestWord || currentWord.length > longuestWord.length) {
            longuestWord = currentWord;

        } 
    }
    return longuestWord;

}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        const number = numbersArray[i];
        sum += number;
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if (numbersArray.length === 0) {
        return 0;
    }
    return sumNumbers(numbersArray)/numbersArray.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, search) {
    let exists = null;
    for(let i = 0; i < arrayOfWords.length; i++) {
        if(exists === null) {
            exists = false;
        }
        const word = arrayOfWords[i];
        if(word === search) {
            exists = true;
            break;
        }

    }
    return exists;

}
