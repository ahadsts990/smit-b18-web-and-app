// objective: user wil enter his total marks and obtained marks
// and we will show him percentage

let total_marks = prompt("Enter total marks: ")
let obt_marks = prompt("Enter obtained marks: ")

let result = (obt_marks / total_marks) * 100

alert("percentage " + result + "%")