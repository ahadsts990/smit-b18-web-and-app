function delete_todo(event) {
    event.target.parentNode.remove()
}

function edit_todo(event) {
    const paragraph_element = event.target.parentNode.querySelector("p")
    const newText = prompt("Enter new updated text", paragraph_element.textContent)

    if(newText){
        paragraph_element.innerText = newText
    }

}

function add_todo(smit) {
    smit.preventDefault()

    const userInput = document.querySelector(".userInput").value

    const result = document.querySelector(".result")

    result.innerHTML += `
    <div class="singleTodo">
        <p>${userInput}</p>
        <button onclick="delete_todo(event)">Delete</button>
        <button onclick="edit_todo(event)">Edit</button>
    </div>
    `

    document.querySelector(".userInput").value = ""

}

// create
// read
// update
// delete

// CRUD Operation

