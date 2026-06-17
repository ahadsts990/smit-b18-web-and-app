// let all_paragraph = document.getElementsByTagName("p")

// all_paragraph[3].innerText = "Hello World"
// all_paragraph[0].innerText = "Hello World"
// all_paragraph[0].style.color = "red"

// let div = document.querySelector(".my-div")
// let all_paragraph = div.querySelectorAll("p")

// all_paragraph[0].style.backgroundColor = "yellow"

// console.log(document.childNodes[1])

const myDiv = document.querySelector(".my-div")

// console.log(myDiv.firstElementChild)
// console.log(myDiv.lastElementChild)
// console.log(myDiv.parentNode)
// console.log(myDiv.childNodes)
// console.log(myDiv.previousSibling)
// console.log(myDiv.nextSibling)
// console.log(myDiv.previousElementSibling)
// console.log(myDiv.nextElementSibling)
// console.log(myDiv.nodeName)
// console.log(myDiv.nextElementSibling)

console.log(myDiv.childNodes.length)


// document.querySelector("a").href = "https://google.com";
document.querySelector("a").setAttribute("href", "https://google.com")

document.querySelector(".btn").addEventListener('click', () => {
    // document.querySelector("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2esfqEtwmeqjD02ZGu2aaiH4GgVdlc25OA&s"
    document.querySelector("img").setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2esfqEtwmeqjD02ZGu2aaiH4GgVdlc25OA&s")
    console.log(document.querySelector("img").getAttribute("src"))
})

console.log(document.querySelector("img").getAttribute("src"))



