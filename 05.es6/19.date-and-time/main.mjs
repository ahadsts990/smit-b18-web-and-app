let rightNow = new Date();
// console.log(rightNow)
// console.log(rightNow.getDay())
// console.log(rightNow.getDate())
// console.log(rightNow.getFullYear())
// console.log(rightNow.getHours())
// console.log(rightNow.getMilliseconds())
// console.log(rightNow.getMinutes())
// console.log(rightNow.getMonth())
// console.log(rightNow.getSeconds())
// console.log(rightNow.getTime())

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const monthNames = ["jan", "feb", "mar", "apr"]

// console.log(dayNames[rightNow.getDay()])
// console.log(monthNames[rightNow.getMonth()])



// ==================================== momentjs started ======================================

// setInterval(function () {
//     let currentTime = moment().format("DD/MM/YYYY hh:mm:ss.SSS A")
//     document.querySelector(".my-para").innerText = currentTime
// }, 1);


// let today = new Date()

// today.setFullYear(2019)
// today.setMonth(3)
// today.setDate(8)

// console.log(today.getFullYear())
// console.log(today.getMonth())
// console.log(today.getDate())

console.log(moment().startOf('day').fromNow())

