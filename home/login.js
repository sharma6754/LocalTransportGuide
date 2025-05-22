document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the login credentials match
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        localStorage.setItem('loggedIn', 'true'); // Mark the user as logged in
        window.location.href = './profile.html'; // Redirect to profile page
    } else {
        alert('Incorrect credentials. Please try again.');
    }
});
