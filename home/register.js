document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form values
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;

    // Basic validation (you can add more advanced checks here)
    if (!username || !name || !email || !password || !phone || !city) {
        alert('Please fill out all fields.');
        return;
    }

    // Save user details to localStorage
    const user = { username, name, email, password, phone, city };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loggedIn', 'true'); // Mark the user as logged in

    // Redirect to home page
    alert('Registration successful! Redirecting to home page...');
    window.location.href = './home.html';
});
