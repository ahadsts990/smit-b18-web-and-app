// initialization
// condition
// increment


// for (let i = 1; i <= 10; i++) {
//     let result = `my i is equal to ${i}`
//     console.log(result)
// }

// let userInput = +prompt("enter number to print")
// let start = +prompt("kahan sy start krna hai")
// let end = +prompt("kahan pr end krna hai")

// for (let i = start; i <= end; i++) {
//     const result = `${userInput} X ${i} = ${userInput * i}`
//     console.log(result)
// }


function print_table(event) {
    event.preventDefault()

    const start = document.querySelector(".start").value
    const end = document.querySelector(".end").value
    const num = document.querySelector(".table").value

    let output = document.querySelector("#output")
    output.innerHTML = ""

    for (let i = +start; i <= +end; i++) {
        const result = `${num} X ${i} = ${i * num}`
        output.innerHTML += `<span>${result}</span>`
    }

}


