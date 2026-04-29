const form = document.querySelector(".form");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const eye = document.querySelector(".eye__password");
const eyeConfirm = document.querySelector(".eye__confirmPassword")


function showError(input, message) {
    const container = input.closest(".form__input-container");
    const error = container.querySelector(".error-message");

    input.classList.add("input-error");
    input.classList.remove("input-success");

    error.textContent = message;
}

function showSuccess(input) {
    const container = input.closest(".form__input-container");
    const error = container.querySelector(".error-message");

    input.classList.remove("input-error");
    input.classList.add("input-success");

    error.textContent = "";
}

function validateNombre() {
    const value = nombre.value.trim();

    if (value.length < 3) {
        showError(nombre, "Debe tener al menos 3 caracteres");
        return false;
    } else {
        showSuccess(nombre);
        return true;
    }
}

function validateEmail() {
    const value = email.value.trim();

    if (!value.includes("@") || !value.includes(".")) {
        showError(email, "Email inválido");
        return false;
    } else {
        showSuccess(email);
        return true;
    }
}

function validatePassword() {
    const value = password.value.trim();

    if (value.length < 6) {
        showError(password, "Debe tener al menos 6 caracteres");
        return false;
    }
    showSuccess(password);
    return true;
}

function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Las contraseñas no coinciden");
        return false;
    }
    showSuccess(confirmPassword);
    return true;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const isNombreValid = validateNombre();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();

    if (isNombreValid && isEmailValid && isPasswordValid && isConfirmValid) {
        alert("Formulario enviado correctamente");
        form.reset();
    }
});

eye.addEventListener("click", function() {
    if (password.type ==="password") {
        password.type = "text";
        eye.textContent = "visibility";
    } else {
        password.type = "password";
        eye.textContent = "visibility_off";
    }
} )



eyeConfirm.addEventListener("click", function() {
    if (confirmPassword.type ==="password") {
        confirmPassword.type = "text";
        eyeConfirm.textContent = "visibility";
    } else {
        confirmPassword.type = "password";
        eyeConfirm.textContent = "visibility_off";
    }
})
