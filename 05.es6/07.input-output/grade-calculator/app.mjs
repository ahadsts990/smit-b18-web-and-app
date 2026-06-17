
function calculate_grade() {
    let percentage = document.getElementById("percentage").value

    let result = ""

    if (percentage > 100 || percentage < 0) {
        result = "Invalid Percentage"
    } else if (percentage >= 80) {
        result = "A+ Grade"
    } else if (percentage >= 70) {
        result = "A Grade"
    } else if (percentage >= 60) {
        result = "B Grade"
    } else if (percentage >= 50) {
        result = "C Grade"
    } else if (percentage >= 40) {
        result = "D Grade"
    } else if (percentage >= 33) {
        result = "E Grade"
    } else {
        result = "Failed"
    }

    document.getElementById("result").innerText = result

}

