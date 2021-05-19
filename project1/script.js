// Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Function to update Class and message for Errors
function showError(input, message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Override the class - add Error
    formControl.className = 'form-control error'
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Override the text for small element using the input message
    small.innerText = message;
}


// Function to update class for Success
function showSuccess(input) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Override the class - add Success
    formControl.className = 'form-control success';
}


// Function to check if EMAIL is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim() )){
        showSuccess(input);
    } else {
        showError(input, `Please provide a valid email`)
    }
}


// Function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        // console.log(input.value);
        if (input.value === '') {
            // showError(input, input.id + ' is Required') 
            // OR
            // ES6 Features

            // showError(input, `${input.id} is required`); // is se magar lower case me araha he to hum getFieldId 
            // function banate he

            showError(input, `${getFieldId(input)} is required`);


        } else {
            showSuccess(input);
        }
    });
}

// Function to check length of input field
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldId(input)} needs to be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldId(input)} needs to be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Function to check if password and confirm password matched
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(password2, `Passwords don't match`);
    }
}

// Function to get the id of the input field with proper case
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// This is an Event Listener for the form on Submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 10);
    checkLength(password, 6, 30);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});