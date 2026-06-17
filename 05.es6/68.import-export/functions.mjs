export const calculatePercentage = (obtMarks, totalMarks) => {
    console.log("functions.mjs")
    console.log(obtMarks / totalMarks * 100)
}

export const greetUser = (username) => {
    console.log("hello " + username)
}

export const username = "Anas"
export const languages = ["html", "css", "js", "ts"]
export const book = {
    bookname: "abc book",
    author: "abc author",
    price: 230,
}

// export {
//     calculatePercentage, greetUser,
//     username,
//     languages,
//     book,
// }

const sum = (num1, num2) => {
    console.log(num1 + num2)
}

export default sum
