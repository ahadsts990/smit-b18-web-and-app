// ES5 NORMAL FUNCTION

function subtract_numbers(num1, num2) {
    return num1 - num2
}

// ES6 ARROW FUNCTION
// ES6 CALLBACK FUNCTION


let add_numbers = (num1, num2) => {
    const finalResult = num1 + num2
    return finalResult
}

// let add_numbers = (num1, num2) => num1 + num2
// let add_numbers = num1 => num1 + 10

console.log(add_numbers(3))
