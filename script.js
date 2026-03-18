function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;

    // Name validation
    if (name === "") {
        alert("Name must not be empty");
        return false;
    }

    // Email validation (must be gmail)
    if (email === "" || !email.endsWith("@gmail.com")) {
        alert("Enter a valid Gmail address (example@gmail.com)");
        return false;
    }

    // Password validation (must contain letters + numbers)
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters and include letters and numbers");
        return false;
    }

    // Mobile validation
    if (isNaN(mobile) || mobile.length !== 10) {
        alert("Enter valid 10-digit mobile number");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}