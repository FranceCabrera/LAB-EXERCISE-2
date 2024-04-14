function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var passwordContainer = document.getElementById("passwordContainer");
    var strengthLevel = document.getElementById("strengthLevel");

    var hasUppercase = /[A-Z]+/.test(password);
    var hasLowercase = /[a-z]+/.test(password);
    var hasNumber = /[0-9]+/.test(password);
    var hasSymbol = /[!@#$%^&*(),.?":{}|<>]+/.test(password);

    if (hasUppercase && !hasNumber && !hasSymbol) {
        passwordContainer.style.backgroundColor = "#FF6347"; 
        strengthLevel.textContent = "Strength: Weak";
    }
    else if ((hasUppercase || hasLowercase) && hasNumber && !hasSymbol) {
        passwordContainer.style.backgroundColor = "#FFA500"; 
        strengthLevel.textContent = "Strength: Medium";
    }
    else if ((!hasUppercase || !hasLowercase) && hasNumber && hasSymbol) {
        passwordContainer.style.backgroundColor = "#FFA500"; 
        strengthLevel.textContent = "Strength: Medium";
    }
    else if (hasUppercase && hasLowercase && hasNumber && hasSymbol) {
        passwordContainer.style.backgroundColor = "#32CD32"; 
        strengthLevel.textContent = "Strength: Strong";
    }
    else {
        passwordContainer.style.backgroundColor = "#FF6347";
        strengthLevel.textContent = "Strength: Weak";
    }
}

function toggleVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.getElementById("toggleButton");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }
}
