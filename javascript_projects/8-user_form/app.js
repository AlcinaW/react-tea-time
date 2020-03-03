document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('postalcode').addEventListener('blur', validatePostalCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2-25}$/;

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}
function validatePostalCode() {
    const postalcode = document.getElementById('postalcode');
    /// there are some other more restrictive patterns for what letters are allowed in a postal code
    const re = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if (!re.test(postalcode.value)) {
        postalcode.classList.add('is-invalid');
    } else {
        postalcode.classList.remove('is-invalid');
    }
}
function validateEmail() {
    const email = document.getElementById('email');
    //allowed characters and the order they have to appear in
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}
function validatePhone() {
    const phone = document.getElementById('phone');
    // Allow dashes and brackets 
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}