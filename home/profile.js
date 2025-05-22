// Check if the user is logged in
if (localStorage.getItem('loggedIn') !== 'true') {
    alert('You are not logged in. Redirecting to login page...');
    window.location.href = './login.html'; // Redirect to login if not logged in
} else {
    // Retrieve user details from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // Display user details on the profile page
    const userDetailsContainer = document.getElementById('user-details');
    userDetailsContainer.innerHTML = `
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Full Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>City:</strong> ${user.city}</p>
    `;
}

// Logout functionality
document.getElementById('logout-button').addEventListener('click', function() {
    // Remove the logged-in status and user data from localStorage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');

    // Redirect to login page
    window.location.href = './login.html';
});
