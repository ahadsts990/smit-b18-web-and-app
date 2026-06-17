// spread operator

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// const arr3 = [...arr1, ...arr2]
// const arr3 = [arr1, arr2]
// const arr3 = arr1 + arr2

// console.log(arr3)

const obj1 = {
    name: "jumbo",
    age: 80,
    subject: "sindhi"
}

const obj2 = {
    father: "dumbo",
    city: "karachi",
    subject: "urdu"
}

const obj3 = {
    ...obj1,
    ...obj2,
}

// console.log(obj3)

// rest opeartor

// const user_object = {
//     email: "user@gmail.com",
//     password: "Pass1234",
//     firstName: "jumbo",
//     lastName: "dumbo",
//     age: 90,
// }

// const { password, email, ...saylani } = user_object
// console.log(saylani)
// console.log(user_object)

// function get_users(...smit) {
//     console.log(smit)
// }

// get_users("ghaffar", "amjad", "sohail", "saleem", "string")


// de-structuring (es6)

const user = {
    name: "waseem",
    email: "waseem@gmail.com",
    age: 70,
    address: "karachi",
    skills: ["html", "css", "js"],
    languages: ["english", "urdu"],
}

const { age, name } = user

console.log(user.age)
console.log(user.name)
console.log(age)
console.log(name)
