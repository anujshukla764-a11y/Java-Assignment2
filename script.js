document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const address = document.getElementById("address").value.trim();

    const gender = document.querySelector('input[name="gender"]:checked');

    // Clear previous errors
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";

    let isValid = true;

    // Required field validation
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your full name.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        document.getElementById("phoneError").textContent =
            "Please enter your phone number.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Phone number must contain exactly 10 digits.";
        isValid = false;
    }

    // Date of birth validation
    if (dob === "") {
        document.getElementById("dobError").textContent =
            "Please select your date of birth.";
        isValid = false;
    }

    // Gender validation
    if (!gender) {
        document.getElementById("genderError").textContent =
            "Please select your gender.";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Please enter a password.";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    // Address validation
    if (address === "") {
        document.getElementById("addressError").textContent =
            "Please enter your address.";
        isValid = false;
    }

    // Success message
    if (isValid) {
        document.getElementById("successMessage").textContent =
            "Registration Successful!";

        document.getElementById("registrationForm").reset();
    }
});
