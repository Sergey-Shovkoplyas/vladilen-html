// main.js

// Adding a simple behavior example
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formId');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload
            const name = form.elements['name'].value;
            const email = form.elements['email'].value;
            const gender = form.elements['gender'].value;
            const agree = form.elements['agree'].checked;

            console.log(form.elements)
            console.log({ name, email, gender, agree });
        });
    }

    // Get references to the button and the email field
    const button = document.getElementById('showEmailBtn');
    const emailField = document.getElementById('email');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Get the value of the email field
        const emailValue = emailField.value;

        // Show an alert with the email value
        alert(`Email: ${emailValue}`);
    });
});