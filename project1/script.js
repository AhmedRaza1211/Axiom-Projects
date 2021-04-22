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


// Event Listener hog form ke submit button kelia to hum Event Listener iske parent ko lagaye ge

// EVENT LISTENERS (last me ate he)
// Create Event Listener for SUBMIT BUTTON

form.addEventListener('submit', function(e) {

    // Stop page from reloading on submit
    e.preventDefault();         

    // console.log('Submitted');                // No. 1 practice

    // e.preventDefault();
    // console.log(username.value);             // ager USERNAME sirf hoga to wo html dikhae ga username ki


    // Check to see if fields meet required fields requirments
    // Check if username input is empty
    if (username.value === '') {
        showError(username, 'Username is required');
    }
    else {
        showSuccess(username);
    }

    // Check if email input is empty
    if (email.value === '') {
        showError(email, 'Email is required')
    }
    else {
        showSuccess(email);
    }

    // check if password input is empty
    if (password.value === '') {
        showError(password, 'Password is required');
    }
    else {
        showSuccess(password)
    }

    // check if confirm password is empty
    if (password2.value === '') {
        showError(password2, 'Password is required');
    }
    else {
        showSuccess(password2);
    }





}); 