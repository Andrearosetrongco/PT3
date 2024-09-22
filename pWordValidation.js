function getMessage() {
    let userName = document.getElementById('uName').value;
    let passWord = document.getElementById('pWord').value;

    // Regular expressions for username and password validation
    let regUser = /^[A-Z][a-z0-9]{8,30}$/; // Username: Starts with a capital, 8-30 characters, no special symbols
    let regEx = /^[a-zA-Z0-9]{9,31}$/;     // Password: Letters and digits, 6-20 characters

    // Additional validations
    let hasUpperCase = /[A-Z]/;    // Check if the password has at least one uppercase letter
    let hasLowerCase = /[a-z]/;    // Check if the password has at least one lowercase letter
    let hasNumber = /[0-9]/;       // Check if the password has at least one number
    let minLength = 8;             // Check if the password has at least 8 characters
    let maxLength = 20;            // Max length of the password
    
    // Validate username
    if (regUser.test(userName)) {
        document.getElementById("pMsg").innerHTML = "This is a valid Username!";
    } else {
        document.getElementById("pMsg").innerHTML = "Invalid Username! Must start with a capital letter and be 9-31 characters.";
    }

    // Validate password based on multiple conditions
    if (passWord.length >= minLength && passWord.length <= maxLength && 
        hasUpperCase.test(passWord) && hasLowerCase.test(passWord) && hasNumber.test(passWord)) {
        document.getElementById("pMsg1").innerHTML = "This is a valid password!";
    } else {
        let errorMsg = "Invalid Password! ";
        if (passWord.length < minLength) errorMsg += "Must be at least 8 characters. ";
        if (passWord.length > maxLength) errorMsg += "Must be less than 30 characters. ";
        if (!hasUpperCase.test(passWord)) errorMsg += "Must contain at least one uppercase letter. ";
        if (!hasLowerCase.test(passWord)) errorMsg += "Must contain at least one lowercase letter. ";
        if (!hasNumber.test(passWord)) errorMsg += "Must contain at least one number. ";
        document.getElementById("pMsg1").innerHTML = errorMsg;
    }
}

// Function: getMessage()
// This function is chine-checks niya if yong username and password inentered ni user are valid ba?
//kinukuha nito yong username and password from the input fields and checks them 
// against some rules. Then inaupdate nito ang messages on the page to let the user know if their inputs are correct or not.

//Username rules:
//- You must start with a capital letter (A-Z).
//- It Can only have lowercase letters (a-z) and numbers (0-9).
// -You should put the Length must be between 9 and 31 characters.

//Password rules:
//- will have or must have at least one uppercase letter.
//- will have or must have at least one lowercase letter.
// - will have or must have at least one number.
// - the Length should be or must be between 8 and 30 characters.

// The function updates the following messages on the page:
//- "pMsg" ipinapakita nito ang result for the username.
// - "pMsg1" ipinapakita nito ang result for the password.

//How to use:
//tatawagin mo ang function na ito if when you want to check the username and password, usually when a button is clicked.

// Example:
// <button onclick="getMessage()">Validate</button>
