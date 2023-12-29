const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform login validation here
    if (username === "aloko" && password === "aloko") {
       window.location='home.html';
        // Redirect to another page or perform other actions
    } else{
        alert('wrong username or password');
    }
});