function calculate_criteria() {

    let username = document.getElementById("username").value
    let age = document.getElementById("age").value
    let experience = document.getElementById("experience").value
    let percentage = document.getElementById("percentage").value

    let result = ""

    if(age < 20 || experience < 2 || percentage < 80){
        result = "sorry " + username + "! you are not eligible for this role"
    }else{
        result = "congrats " + username + "! you are eligible for this role"
    }

    document.getElementById("output").innerText = result

}