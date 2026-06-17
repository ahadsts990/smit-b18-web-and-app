function submit_form(event) {
    event.preventDefault()
    console.log("submitting form")
    console.log(event)
}

function change_input(event) {
    console.log(event.target.value)
}

function input_text_change(event) {
    console.log(event.target.value)
}


function handle_mouse_over(event) {
    event.target.src = "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-WOMENS-WHITE-T-SHIRTS-SUB-2048px-5847.jpg?auto=webp&quality=75&width=1024"
}

function handle_image_out(event) {
    event.target.src = "https://www.shutterstock.com/image-photo/soiled-dirty-muddy-white-t-600nw-2510520901.jpg"
}

function handle_mouse_move(event) {
    const image = document.querySelector(".thirsty-image");

    image.style.position = "fixed";
    image.style.left = event.clientX + 15 + "px";
    image.style.top = event.clientY + 15 + "px";
}

function handle_heading_mouse_over(event) {
    event.target.innerText = "Iam a heading"
    event.target.style.color = "red"
    event.target.style.border = "2px solid black"
}

function handle_heading_mouse_out(event) {
    event.target.innerText = "hello world"
    event.target.style.color = "black"
    event.target.style.border = "none"
}



function handle_input_change(event) {
    console.log(event.target.value)
}






// password field

function handle_password_show() {
    document.querySelector("#password-input").type = "text"
    document.querySelector(".show-btn").style.display = 'none'
    document.querySelector(".hide-btn").style.display = 'inline-block'

}
function handle_password_hide() {
    document.querySelector("#password-input").type = "password"
    document.querySelector(".show-btn").style.display = 'inline-block'
    document.querySelector(".hide-btn").style.display = 'none'
}





function handle_focus(event) {
    event.target.style.backgroundColor = "orange"
    event.target.value = "welcome to input"
}

function handle_blur(event) {
    event.target.style.backgroundColor = "transparent"
    event.target.value = "you are out of input"
}

document.querySelector(".my__heading").innerHTML = "<a href=''>Hello SMIT Class</a>"


function see_more() {
    document.querySelector(".my_paragraph").innerText = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto eaque laboriosam quod nobis, in
        iusto ex ea odio dicta voluptatum dolores reiciendis similique corrupti maiores error tenetur recusandae cumque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto eaque laboriosam quod nobis, in
        iusto ex ea odio dicta voluptatum dolores reiciendis similique corrupti maiores error tenetur recusandae cumque.
`
    document.querySelector(".more-btn").style.display = "none"
    document.querySelector(".less-btn").style.display = "inline-block"

}
function see_less() {
    document.querySelector(".my_paragraph").innerText = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto eaque laboriosam quod nobis, in
    iusto ex ea odio dicta voluptatum dolores reiciendis similique corrupti maiores error tenetur recusandae cumque.
    `
    document.querySelector(".more-btn").style.display = "inline-block"
    document.querySelector(".less-btn").style.display = "none"
}



function handle_code_change(event){
    document.querySelector(".output").innerHTML = event.target.value
}