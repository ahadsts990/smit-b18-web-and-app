let currentUser_string = localStorage.getItem("currentUser")
let currentUser = JSON.parse(currentUser_string)

if (currentUser) {
    window.location.href = "../posts/index.html"
}

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if (!email) {
        alert("please enter your email")
        return
    }

    if (!email.includes("@")) {
        alert("email is invalid")
        return
    }

    if (!password) {
        alert("please enter your password")
        return
    }

    let string_data = localStorage.getItem("users")
    let all_users = JSON.parse(string_data) || []

    let existing_user = all_users.find((user) => {
        return user.email.toLowerCase() === email.toLowerCase()
    })

    if (!existing_user) {
        alert("Email or password incorrect")
        return
    }

    if (existing_user.password !== password) {
        alert("Email or password incorrect")
        return
    }

    localStorage.setItem("currentUser", JSON.stringify(existing_user))
    window.location.href = "../posts/index.html"

})