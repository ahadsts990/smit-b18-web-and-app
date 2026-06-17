// first-class-and-higher-order-functions

// first class function

// - function koi parameter lerha ho
// - function koi value return krrha ho
// - function kisi variable main ho

function greet() {
    alert("hello user")
}

const add = (a, b) => {
    return a + b
}

// greet()
// add(3,4)
// console.log(add(3, 4))

const greetUser = (username) => {
    alert(`hello ${username}`)
}

const hello = () => {
    return "hello world"
}

// higher order function

// - wo function jo kisi aur function ko return kray 
// - wo function jo kisi function ko as a parameter accept kray

const myFun = () => {
    return () => {
        alert("hello world")
    }
}

const newFun = myFun()
// newFun()

const getWeather = () => {
    return 35
}

const getMessage = (fun) => {
    console.log(fun())
}

getMessage(getWeather)
