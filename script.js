document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error");

    form.addEventListener("submit", function (event) {
        const email = emailInput.value;

        const atIndex = email.indexOf("@");
        const dotIndex = email.indexOf(".", atIndex);

        if (atIndex === -1 || dotIndex === -1 || atIndex > dotIndex) {
            event.preventDefault();
            errorMessage.textContent = "Niepoprawny adres email.";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "Poprawny adres email!";
            errorMessage.style.color = "green";
        }
    });
});

