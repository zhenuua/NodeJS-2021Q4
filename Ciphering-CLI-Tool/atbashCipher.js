const { alphabet, reverseAlphabet } = require("./constants.js");

let atbash = function(str) {
    return str.split('')
        .map(char => {
            let isUpperCase = char.toUpperCase() === char;
            const index = alphabet.findIndex(letter => letter === char.toLowerCase());
            if (index === -1) {
              return isUpperCase ? char.toUpperCase() : char
            } else {
              return isUpperCase ? reverseAlphabet[index].toUpperCase() : reverseAlphabet[index]    
            } 
        })
        .join('')
}

module.exports = { atbash }