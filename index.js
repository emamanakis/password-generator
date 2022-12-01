const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let passwordEl1 = document.getElementById("suggested-password-1")
let passwordEl2 = document.getElementById("suggested-password-2")

var slider = document.getElementById("your-range");
var output = document.getElementById("length-passwords");

output.textContent = slider.value;

slider.oninput = function() {
    output.textContent = this.value;
}

function createPasswords() {
    let firstPassword = "";
    let secondPassword = "";

    for (let i = 0; i < output.textContent; i++) {
        let randomNum1 = Math.floor(Math.random() * characters.length);
        let randomNum2 = Math.floor(Math.random() * characters.length);

        firstPassword += characters[randomNum1];
        secondPassword += characters[randomNum2];
    }

    passwordEl1.textContent = firstPassword;
    passwordEl2.textContent = secondPassword;
}

