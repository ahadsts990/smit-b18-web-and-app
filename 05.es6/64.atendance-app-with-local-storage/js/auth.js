function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("students")) || [];
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        if (user.role === "ADMIN") window.location = "admin.html";
        else window.location = "student.html";
    } else {
        alert("Invalid Login");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location = "index.html";
}