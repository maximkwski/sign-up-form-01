const form = document.querySelector('form');
const pwd = document.querySelector('#password');
const confirmPwd = document.querySelector('#confirm-pwd');
const errorDiv = document.querySelector('.error')






form.addEventListener('submit', (e) => {
    let errorMessage = [];

    if (pwd.value !== confirmPwd.value) {
        errorMessage.push('*Passwords do not match');
        pwd.setAttribute('style', 'border:1px solid red');
        confirmPwd.setAttribute('style', 'border:1px solid red');
    }
    if (errorMessage.length > 0) {
        e.preventDefault()
        errorDiv.innerText = errorMessage.join(', ');
    } else {
        alert("Done! Thank you!");
    }
})