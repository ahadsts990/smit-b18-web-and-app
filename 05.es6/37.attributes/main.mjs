let elementId = document.querySelector(".my-heading").getAttribute("id")
let url = document.querySelector("img").getAttribute("src")

// document.querySelector(".my-heading").className += " new-class"
document.querySelector(".my-heading").classList.add("new-class")
document.querySelector(".my-heading").classList.remove("another-class")


document.querySelector(".dark-btn").addEventListener("click", (e) => {
    document.body.classList.toggle("light")
    document.body.classList.toggle("another-class")
})
