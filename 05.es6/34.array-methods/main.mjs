// let my_array = ["pakistan", "china", "japan", "uae", "canada", "srilanka", "switzerland"]

// array.map()

// old
// let new_array = []

// for (let i = 0; i < my_array.length; i++) {
//     new_array.push(my_array[i].toUpperCase())
// }

// console.log(new_array)


// new

// let capitalize_array = my_array.map((country) => {
//     return country.toUpperCase()
// })

// console.log(capitalize_array)
// console.log(my_array)

// let numbers = [1, 2, 3, 4, 5, 6]

// let double_numbers = numbers.map((num) => {
//     return num * 2
// })

// console.log(double_numbers)

// console.log(capitalize_array)



// array.forEach()
// let countries_array = ["pakistan", "china", "uae", "canada", "srilanka"]

// countries_array.forEach((country) => {
//     return country.toUpperCase()
// })

// console.log(countries_array)



// array.filter()

// let numbers = [3, 5, 7, 9, 2, 4]

// let filtered_numbers = numbers.filter((num) => {
//     return num > 3
// })

// console.log(numbers)
// console.log(filtered_numbers)


// array.find()

// let users = ["ali", "irfan", "umar", "fahad", "umair"]

// let user_data = users.find((user) => {
//     return user === "umar"
// })

// console.log(user_data)


let users = [
    {
        name: "Mansoor",
        age: 22,
        favSubject: "computer",
        email: "mansoor@gmail.com"
    },
    {
        name: "Ahmad Raza",
        age: 22,
        favSubject: "chemistry",
        email: "ahmad@gmail.com"
    },
    {
        name: "Sufiyan",
        age: 18,
        favSubject: "Sindhi",
        email: "sufiyan@gmail.com"
    },
    {
        name: "Talha",
        age: 19,
        favSubject: "Pakistan Studies",
        email: "sufiyan@gmail.com"
    },
    {
        name: "Bilawal",
        age: 19,
        favSubject: "Urdu",
        email: "bilawal@gmail.com"
    },
    {
        name: "Faris",
        age: 18,
        favSubject: "Islamiat",
        email: "faris@gmail.com"
    },
    {
        name: "Madni",
        age: 22,
        favSubject: "Math",
        email: "madni@gmail.com"
    }
]

// array.forEach()
// users.forEach(function (user) {
//     console.log(user.email.toUpperCase())
// })

// array.map()

// let capital_subjects = users.map((user) => {
//     return {
//         ...user,
//         favSubject: user.favSubject.toUpperCase()
//     }
// })

// console.log(capital_subjects)


// let older_than_22 = users.filter((user) => {
//     return user.age == 22
// })

// console.log(older_than_22)


// let user_with_email = users.find((user) => {
//     return user.email == "sufiyan@gmail.com"
// })

// console.log(user_with_email)


// let likes_array = [
//     "bilawal@gmail.com",
//     "mansoor@gmail.com",
//     "ahmed@gmail.com",
//     "mustafa@gmail.com",
//     "rafay@gmail.com",
//     "faris@gmail.com",
//     "sufyan@gmail.com",
//     "abdulsalam@gmail.com",
//     "talha@gmail.com",
// ]


// let users = [
//     {
//         name: "Mansoor",
//         age: 22,
//         favSubject: "computer",
//         email: "mansoor@gmail.com"
//     },
//     {
//         name: "Ahmad Raza",
//         age: 22,
//         favSubject: "chemistry",
//         email: "ahmad@gmail.com"
//     },
//     {
//         name: "Sufiyan",
//         age: 15,
//         favSubject: "Sindhi",
//         email: "sufiyan@gmail.com"
//     },
//     {
//         name: "Talha",
//         age: 19,
//         favSubject: "Pakistan Studies",
//         email: "sufiyan@gmail.com"
//     },
//     {
//         name: "Bilawal",
//         age: 19,
//         favSubject: "Urdu",
//         email: "bilawal@gmail.com"
//     },
//     {
//         name: "Faris",
//         age: 18,
//         favSubject: "Islamiat",
//         email: "faris@gmail.com"
//     },
//     {
//         name: "Madni",
//         age: 22,
//         favSubject: "Math",
//         email: "madni@gmail.com"
//     }
// ]

// array.some()
// let does_user_exist_above_19 = users.some((user)=>{
//     return user.age == 15
// })

// console.log(does_user_exist_above_19)



// array.every()
// let does_all_users_above_15 = users.every((user) => {
//     return user.age >= 15
// })

// console.log(does_all_users_above_15)


// let user_marks = [
//     {
//         subject: "urdu",
//         marks: 70,
//     },
//     {
//         subject: "math",
//         marks: 60,
//     },
//     {
//         subject: "physics",
//         marks: 23,
//     },
//     {
//         subject: "english",
//         marks: 80,
//     },
//     {
//         subject: "sindhi",
//         marks: 92,
//     },
// ]

// let marks = 0

// for (let i = 0; i < user_marks.length; i++) {
//     marks += user_marks[i].marks
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// array.reduce()
// let all_marks = numbers.reduce((previous, current) => {
//     return current + previous
// })

// console.log(all_marks)


// // array.flat()
// const arr1 = [
//     0,
//     1,
//     2,
//     [
//         3, 4,
//         [5, 6, [7, 8, [9, 10, [11, 12, [13, 14]]]]]
//     ],
// ];


// const new_array_1 = arr1.flat(6)
// const new_array_2 = arr1.flat(Infinity)


// console.log(new_array_1)
// console.log(new_array_2)



// array.reverse()
// let new_array = [1, 2, 3, 4, 5, 6, 7]

// let reversed_array = new_array.reverse()

// console.log(reversed_array)




// array.concat()
let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]

// let joined_array = arr1.concat(arr2)

// console.log(joined_array)




// array.join()

// let alphabets = ["a", "b", "c", "d", "e", "f", "g"]
// let joined_array = alphabets.join("")
// console.log(joined_array)



// string.split()

// let my_string = "Hello SMIT"
// let arr = my_string.split("")
// console.log(arr)


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let user_input = document.querySelector("#input").value
    let reversed_string = user_input.split("").reverse().join("")

    if (user_input.toLowerCase() === reversed_string.toLowerCase()) {
        document.querySelector(".output").innerText = "user user input is palindrome"
        document.querySelector(".output").style.color = "green"
    } else {
        document.querySelector(".output").innerText = "user user input is not palindrome"
        document.querySelector(".output").style.color = "red"
    }

})


