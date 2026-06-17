function save_data() {
    const username = document.querySelector(".username").value
    localStorage.setItem("myName", username)

}

const saved_user_name = localStorage.getItem("myName")
document.querySelector(".output").innerText = saved_user_name
