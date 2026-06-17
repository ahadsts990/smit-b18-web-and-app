// document.querySelector(".my-btn").addEventListener('click', () => {
//     document.querySelector('.result').innerHTML += `<h1>hello world</h1>`
// })

document.querySelector(".my-btn").addEventListener('click', () => {

    let h1 = document.createElement('h1')
    h1.innerText = "hello world SMIT"
    h1.style.backgroundColor = 'lime'

    let img = document.createElement("img")
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7NKy4-HWtAGDYqL_dw7SCzPvI6la3rdz8A&s"
    img.style.borderRadius = "8px"
    img.style.height = "200px"
    img.style.width = "200px"

    let a = document.createElement("a")
    a.href = "https://carzai.co.uk"
    a.innerText = "click me"

    document.querySelector('.result').appendChild(h1)
    document.querySelector('.result').appendChild(a)
    document.querySelector('.result').appendChild(img)

})
