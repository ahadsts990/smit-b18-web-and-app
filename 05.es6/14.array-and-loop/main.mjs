// let newArr = ["karachi", "lahore", "islamabad", "quetta", "peshawar"]

// for (let i = 0; i < newArr.length; i++) {
//     console.log(newArr[i])
// }


let myArr = []

function create_todo(event) {
    // stop page refresh
    event.preventDefault()

    // get user input
    const userInput = document.querySelector(".userinput").value
    // add user input to array
    myArr.unshift(userInput)
    
    // empty the output <div> element to remove old output
    document.querySelector(".userinput").value = ""

    // getting result element
    let resultContainer = document.querySelector(".result")
    // empty result element to remove old <p>
    resultContainer.innerHTML = ""

    // showing result to result container
    for (let i = 0; i < myArr.length; i++) {
        resultContainer.innerHTML += `<p>${myArr[i]}</p>`
    }

}