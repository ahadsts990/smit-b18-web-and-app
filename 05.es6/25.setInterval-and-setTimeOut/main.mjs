function fun_name() {

}

const calculate_percentage = (obtMarks, totalMarks) => {
    const percentage = (obtMarks / totalMarks) * 100
    return percentage.toFixed(2) + "%"
}

console.log(calculate_percentage(120, 200))
console.log(calculate_percentage(167, 200))
console.log(calculate_percentage(170, 220))

// baar baar chlta hai
setInterval(function () {
    console.log(new Date())
}, 1000)


// aik baar chlta hai
setTimeout(function(){
    console.log("hello world here")
}, 3000)

