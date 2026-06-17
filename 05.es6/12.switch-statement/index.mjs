function calculate_percentage(event) {
    event.preventDefault()

    const total_marks = document.getElementById("total-marks").value
    const obt_marks = document.getElementById("obt-marks").value

    const percentage = (obt_marks / total_marks) * 100

    let result = ""

    if (!total_marks || !obt_marks) {
        document.getElementById("result").innerText = "Total marks & Obtained Marks are required"
    } else {
        switch (true) {

            case (percentage > 100 || percentage < 0):
                result = "obtained marks must be less than and equal to total marks"
                break;

            case (percentage >= 80):
                result = "A+ Grade"
                break;

            case (percentage >= 70):
                result = "A Grade"
                break;

            case (percentage >= 60):
                result = "B Grade"
                break;

            case (percentage >= 50):
                result = "C Grade"
                break;

            case (percentage >= 40):
                result = "D Grade"
                break;

            case (percentage >= 33):
                result = "E Grade"
                break;

            default:
                result = "You Are Failed 😂! Have a nice day"
                break;


        }

        const final_message = "Your percentage is " + percentage + "% and your grade is " + result

        document.getElementById("result").innerText = final_message
    }

}