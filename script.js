//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    const patterns = {
        name: /^[A-Za-z]{3,}$/,
        email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        phone: /^[0-9]{10}$/
    };

    function validateInput(input, pattern) {
        if (pattern.test(input.value)) {
            input.style.backgroundColor = 'lightgreen';
        } else {
            input.style.backgroundColor = 'pink';
        }
    }

    nameInput.addEventListener('input', function() {
        validateInput(nameInput, patterns.name);
    });

    emailInput.addEventListener('input', function() {
        validateInput(emailInput, patterns.email);
    });

    phoneInput.addEventListener('input', function() {
        validateInput(phoneInput, patterns.phone);
    });
});
