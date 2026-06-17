const myInput = document.querySelector('.my-input')

myInput.addEventListener('focus', () => {
    console.log("input focused")
})

myInput.addEventListener('blur', () => {
    console.log("input blured")
})

myInput.addEventListener('input', (e) => {
    console.log(e.target.value)
})

document.body.addEventListener('mousemove', (e) => {
    console.log(e.clientX)
    console.log(e.clientY)
})

document.querySelector(".my-btn").addEventListener("click", () => {
    console.log("button is clicked")
})