function edit_todo(event) {
    let text = event.target.parentNode.querySelector("span").textContent
    let string_wala_array = localStorage.getItem("todos")
    let all_todos = JSON.parse(string_wala_array) || []

    let updated_text = prompt("Enter updated text", text)

    if (updated_text) {
        let todoPosition = all_todos.indexOf(text)
        all_todos.splice(todoPosition, 1, updated_text)

        let converted_array = JSON.stringify(all_todos)
        localStorage.setItem("todos", converted_array)
        get_todos()
    }

}

function delete_todo(event) {

    // getting todo text
    let text = event.target.parentNode.querySelector("span").textContent

    // getting stringified array from local storage
    let string_wala_array = localStorage.getItem("todos")

    // converting string to array
    let all_todos = JSON.parse(string_wala_array) || []

    // getting position of text
    let todoPosition = all_todos.indexOf(text)

    // removing text from array
    all_todos.splice(todoPosition, 1)

    let string_converted_array = JSON.stringify(all_todos)
    localStorage.setItem("todos", string_converted_array)
    get_todos()

}

function get_todos() {

    // getting string wala array from local storage
    let string_wala_array_from_local_storage = localStorage.getItem("todos")

    // convert string to array
    let all_todos = JSON.parse(string_wala_array_from_local_storage) || []

    let output = document.querySelector(".output")
    output.innerHTML = ""

    for (let i = 0; i < all_todos.length; i++) {
        output.innerHTML += `
        <div>
            <span>${all_todos[i]}</span>
            <button onclick="edit_todo(event)">Edit</button>
            <button onclick="delete_todo(event)">Delete</button>
        </div>
        `
    }

}

function create_todo(event) {

    // dont refresh page
    event.preventDefault();

    // get user input from html
    let userInput = document.querySelector("#userInput");

    // getting string wala array from local storage
    let string_wala_array_from_local_storage = localStorage.getItem("todos")

    // converting string wala array to normal array
    let oldValues = JSON.parse(string_wala_array_from_local_storage) || [];

    // adding new value at the start
    // keeping old values
    let newValues = [userInput.value, ...oldValues];

    // convert new_array to string
    let string_main_converted_array = JSON.stringify(newValues)

    // save converted string to local storage
    localStorage.setItem("todos", string_main_converted_array)

    userInput.value = "";
    get_todos()
}

get_todos()
