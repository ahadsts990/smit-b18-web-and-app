let currentUser_string = localStorage.getItem("currentUser")
let currentUser = JSON.parse(currentUser_string)

if (currentUser) {
    window.location.href = "../posts/index.html"
}

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const confirm_password = document.querySelector('#confirm_password').value

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

    if (password !== confirm_password) {
        alert("password do not match")
        return
    }

    // get all users
    let all_users_string = localStorage.getItem("users")
    let all_users = JSON.parse(all_users_string) || []

    let existing_user = all_users.find((user) => {
        return user.email.toLowerCase() === email.toLowerCase()
    })

    if (existing_user) {
        alert("email already taken")
        return
    }

    let newUser = {
        email: email.toLowerCase(),
        password: password
    }

    let updated_users = [newUser, ...all_users]

    localStorage.setItem("users", JSON.stringify(updated_users))

    window.location.href = "../login/index.html"

})
