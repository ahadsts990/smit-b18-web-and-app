// ES5

function add_numbers(num1, num2) {
    const final = num1 + num2
    return final
}

// const addition = add_numbers(40, 40)
// console.log(addition)
// const addition_2 = add_numbers(30, 30)
// console.log(addition_2)

function greet_user(username) {
    const finalResult = `Hello, ${username}`
    return finalResult
}

// console.log(greet_user("Umair"))
// console.log(greet_user("Junaid"))
// console.log(greet_user("Akram"))
// console.log(greet_user("Waseem"))
// console.log(greet_user("Saleem"))

let add_age = 10 // global variable

function my_age(userAge){
    const finalAge = userAge + add_age
    return finalAge
}

const new__age = my_age(50)
console.log(new__age)


