function handle_dark() {
    document.querySelector(".light").className = "dark"
    document.querySelector(".dark-btn").style.display = "none"
    document.querySelector(".transparent-btn").style.display = "block"
    document.querySelector(".light-btn").style.display = "none"
}
    
function handle_transparent() {
    document.querySelector(".dark").className = "transparent"
    document.querySelector(".transparent-btn").style.display = "none"
    document.querySelector(".dark-btn").style.display = "none"
    document.querySelector(".light-btn").style.display = "block"
}

function handle_light() {
    document.querySelector(".transparent").className = "light"
    document.querySelector(".dark-btn").style.display = "block"
    document.querySelector(".transparent-btn").style.display = "none"
    document.querySelector(".light-btn").style.display = "none"
}

function add_class() {
    document.querySelector(".heading").classList.add("my-class")
    document.querySelector(".my-class").classList.remove("heading")
}
