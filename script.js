document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Here, you can add your login validation logic
        // For demonstration purposes, let's assume valid credentials are "admin" for both username and password
        if (username === "admin" && password === "admin") {
            alert("Login successful!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
