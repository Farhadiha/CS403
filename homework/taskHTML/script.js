document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value
    const gender = document.querySelector('input[name="gender"]:checked').value

    if (password !== confirmPassword) {
        alert('Confirm password did not match with password')
        return
    }

    const userDetails = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        gender: gender
    }

    console.log(userDetails);
});
