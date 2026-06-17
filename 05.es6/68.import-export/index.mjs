import {
    book,
    calculatePercentage,
    greetUser,
    username as myUsername,
    languages,
} from "./functions.mjs"

import {
    calculatePercentage as myFunction,
} from "./other-functions.mjs"

import addFun from "./other-functions.mjs"
import addMyFun from "./functions.mjs"

console.log("hello nodejs")
console.log(1 + 5)

calculatePercentage(130, 200)
greetUser("Jamal")

myFunction(70, 170)

console.log(myUsername)
console.log(languages)
console.log(book)

addFun(13, 12)

