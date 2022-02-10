//getting the elements
passwordLength = document.getElementById('passwlength');
const specialCharacters = document.querySelector('#specialChar');
const number = document.querySelector('#number');
const capitalletter = document.querySelector('#CapLetter');
const password = document.getElementById('pass');
const button = document.querySelector('#button');
const buttonreset = document.querySelector('#reset');
const p = document.querySelector('#p');


//arrays
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
alphabetCapital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
character = [',', '.', '_', '?', '$', '-', '+'];
numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];



//listen the click event
button.addEventListener('click', function() {
    const arrayLength = passwordLength.value;

    for (let i = 0; i < arrayLength; i++) {

        document.getElementById("pass").innerHTML += alphabet[generateRandom(alphabet.length)];
        //if the capital letters are checked
        if (capitalletter.checked && i < arrayLength - 1) {
            i++;
            document.getElementById("pass").innerHTML += alphabetCapital[generateRandom(alphabetCapital.length)];
        }
        //if the special characters are checked
        if (specialCharacters.checked && i < arrayLength - 1) {
            i++;
            document.getElementById("pass").innerHTML += character[generateRandom(character.length)];
        }
        //if the numbers are checked
        if (number.checked && i < arrayLength - 1) {
            i++;
            console.log(i)
            document.getElementById("pass").innerHTML += numbers[generateRandom(numbers.length)];
        }
    }
    document.getElementById('p').style.height = "100px";
    document.getElementById('p').style.paddingTop = "10px";
})


/**
 * removes the generated password 
 */
buttonreset.addEventListener('click', function() {

    document.getElementById("pass").innerHTML = "";

})

/**
 * Generates the random number
 */
function generateRandom(arraysize) {
    let choice = Math.floor(Math.random() * arraysize);
    return choice;

}