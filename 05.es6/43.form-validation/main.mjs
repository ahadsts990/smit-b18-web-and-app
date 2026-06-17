function handleSubmit() {
    let username = document.querySelector(".username").value
    if (username === "") {
        alert("enter your name")
    } else {
        console.log(username)
    }
}

let email_regex = /^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

function testEmail() {
    let email = document.querySelector(".email").value
    console.log(email)
    if (!email_regex.test(email)) {
        alert("email is invalid")
    }
}

// number and characters are required
let password_regex = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*\s{2})[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,24}$/

function testPass() {
    let password = document.querySelector(".password").value
    console.log(password)
    if (!password_regex.test(password)) {
        alert("password must contain at least one number and one character")
    }
}

let otp_regex = /^[a-zA-Z0-9]{6}$/
function testOTP() {
    let otp = document.querySelector(".otp").value
    console.log(otp)
    if (!otp_regex.test(otp)) {
        alert("otp invalid")
    }
}

const phone_number_regex = /^\+(?:[0-9]?){6,14}[0-9]$/ // any international phone number
function testPhone() {
    let phone = document.querySelector(".phone").value
    console.log(phone)
    if (!phone_number_regex.test(phone)) {
        alert("phone number invalid")
    }
}

const pakistan_regex = /^03\d{9}$/
function testPakistan() {
    let pak = document.querySelector(".pak").value
    console.log(pak)
    if (!pakistan_regex.test(pak)) {
        alert("Pakistani phone number invalid")
    }
}

const firstNamePattern = /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{2,15}$/;
const lastNamePattern = /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{2,15}$/;
const fatherNamePattern = /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{2,30}$/;
const emailPattern = /^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*\s{2})[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,24}$/;
const otpPattern = /^[a-zA-Z0-9]{6}$/
const phoneNumberPatternPakistani = /^03\d{9}$/
const phoneNumberPattern = /^\+(?:[0-9]?){6,14}[0-9]$/ // any international phone number
const rollNoPattern = /^\d{6}$/
