// Schimbă între formularul de login și înregistrare
function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

// Validare pentru login (exemplu simplu)
function validateLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email === "" || password === "") {
        alert("Te rugăm să completezi toate câmpurile.");
        return false;
    }

    // Poți adăuga logica pentru a verifica datele
    alert("Te-ai autentificat cu succes!");
    window.location.href = "inbox.html"; // Redirecționează către inbox după login
    return false;
}
