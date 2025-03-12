document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error");

    form.addEventListener("submit", function (event) {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(email)) {
            event.preventDefault(); // Zapobiega wysłaniu formularza
            errorMessage.textContent = "Niepoprawny adres email.";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "";
        }
    });
});
