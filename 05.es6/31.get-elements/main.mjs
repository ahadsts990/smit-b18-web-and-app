const all_buttons = document.getElementsByTagName('button')

// console.log(all_buttons)

const all_headings = document.getElementsByTagName("h1")

for (let i = 0; i < all_headings.length; i++) {
    all_headings[i].innerText = "abc 123"
    all_headings[i].style.color = 'red'
    all_headings[i].style.backgroundColor = 'orange'
    all_headings[i].style.fontFamily = 'sans-serif'
}

const all_divs = document.getElementsByTagName("div")

for (let i = 0; i < all_divs.length; i++) {
    all_divs[i].id = "hello"
}

const container = document.querySelector(".container")
const all_headings_of_container = container.querySelectorAll("h1")

for (let i = 0; i < all_headings_of_container.length; i++) {
    all_headings_of_container[i].innerText = "p inside div"
    all_headings_of_container[i].style.color = 'yellow'
    all_headings_of_container[i].style.backgroundColor = 'green'
    all_headings_of_container[i].style.fontFamily = 'monospace'
}
