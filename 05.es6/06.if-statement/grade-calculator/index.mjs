// objective: hamain aik grade calculator bnana hai, wo aapki percentage lega prompt sy
// aur percentage ky behalf pr aapka grade btadega

// greater than 100 ==> invalid percentage
// less than 0      ==> invalid percentage
// 80 - 100         ==> A+
// 70 - 80          ==> A
// 60 - 70          ==> B
// 50 - 60          ==> C
// 40 - 50          ==> D
// 33 - 40          ==> E
// less than 33     ==> Fail

let percentage = prompt("enter your percenatge")

// if greater than 100

if (percentage > 100) {
    alert("Invalid percentage")

    // if less than 0
} else if (percentage < 0) {
    alert("Invalid percentage")

    // if greater than or equal 80
} else if (percentage >= 80) {
    alert("A+ Grade")

    // if greater than or equal 70
} else if (percentage >= 70) {
    alert("A Grade")

    // if greater than or equal 60
} else if (percentage >= 60) {
    alert("B Grade")

    // if greater than or equal 50
} else if (percentage >= 50) {
    alert("C Grade")

    // if greater than or equal 40
} else if (percentage >= 40) {
    alert("D Grade")

    // if greater than or equal 33
} else if (percentage >= 33) {
    alert("E Grade")

    // else failed
} else {
    alert("Failed")

}