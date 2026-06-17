console.log("Javascript running... ");

// AND OPERATOR ===> &&
// OR OPERATOR ====> ||

// let name = "waseem"
// let age = 20

// if (name === "waseem" || age > 30) {
//     console.log("you are a right person")
// }else{
//     console.log("your are a wrong person")
// }


// age must be greater than 25
// teacher's percentage greater than 80
// techer experience must be 2 years



// AND OPERATOR

// let age = prompt("enter your age")
// let percentage = prompt("enter your percentage")
// let experience = prompt("enter your experience in years")

// if (
//     age > 25 &&
//     percentage > 80 &&
//     experience > 2
// ) {

//     console.log("congrats! you are elegible for teaching")
//     alert("congrats! you are elegible for teaching")

// }else{
//     console.log("Ooops! you are not elegible for teaching")
//     alert("Ooops! you are not elegible for teaching")
// }



// OR OPERATOR

// get 5 paper numbers, agr wo aik main bhi fail hai to usko bolna hai fail

let english_marks = prompt("Enter english marks")
let urdu_marks = prompt("Enter urdu marks")
let math_marks = prompt("Enter math marks")

if (english_marks < 33 || urdu_marks < 33 || math_marks < 33) {

    if (english_marks < 33) {
        alert("you are failed in english")
        console.log("you are failed in english")
    }

    if (urdu_marks < 33) {
        alert("you are failed in urdu")
        console.log("you are failed in urdu")
    }

    if (math_marks < 33) {
        alert("you are failed in math")
        console.log("you are failed in math")
    }

} else {
    console.log("you are passed!")
    alert("you are passed!")
}

