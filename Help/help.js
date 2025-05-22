document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate login and redirect to home page
    window.location.href = '../home/home.html';
});