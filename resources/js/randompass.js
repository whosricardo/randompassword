document.addEventListener(`DOMContentLoaded`, function() {
    const passwordInput = document.getElementById('passwordInput');
    const buttonGenerator = document.getElementById('buttonGenerator');

    function generatePassword(length, allowLowCharacters, allowHighCharacters, allowNumbers, allowSpecialCharacters) {

        const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const higherCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialCharacters = "?!@#$%&*";

        let allowCharacters = "";
        let password = "";

        allowCharacters += allowLowCharacters ? lowerCaseLetters : "";
        allowCharacters += allowHighCharacters ? higherCaseLetters : "";
        allowCharacters += allowNumbers ? numbers : "";
        allowCharacters += allowSpecialCharacters ? specialCharacters : "";

        console.log(allowCharacters);

        if(length <= 0) {
            return `(Password Must be at least one)`;
        }

        if(allowCharacters.length === 0) {
            return`(At least one needs to be selected)`;
        }

        for(let i  = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowCharacters.length);
            password += allowCharacters[randomIndex];
        }

        return password;

    }


    const passwordLenght = 10;
    const allowLowCharacters = true;
    const allowHighCharacters = true;
    const allowNumbers = true;
    const allowSpecialCharacters = true;

    buttonGenerator.onclick = function() {
        updatePassword();
    }

    function updatePassword() {
        const newPassword = generatePassword(passwordLenght, allowLowCharacters, allowHighCharacters, allowNumbers, allowSpecialCharacters);

        if (newPassword.startsWith('(')) {
            passwordInput.placeholder = newPassword;
            passwordInput.value = '';
        } else {
            passwordInput.value = newPassword;
            passwordInput.placeholder = 'Sua senha será exibida aqui';
        }
    }

})