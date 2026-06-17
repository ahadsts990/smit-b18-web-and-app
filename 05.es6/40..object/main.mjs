// let user_details = {
//     name: "jumbo",
//     father: "dumbo",
//     age: 420,
//     company: "k electric"
// }

// console.log(user_details)
// user_details.name = "waseem"
// user_details.father += " ghaffar"
// user_details.age = 120
// console.log(user_details)



// constructor


// NEW_VERSION ES6
// class User {
//     constructor(name, age, fav_subject) {
//         this.username = name
//         this.age = age
//         this.fav_subject = fav_subject
//     }
// }

// OLD_VERSION ES5
// function User(name, age, fav_subject) {
//     this.username = name
//     this.age = age
//     this.fav_subject = fav_subject
// }

// let user1 = new User("ahmed raza", 22, "chemistry")
// let user2 = new User("faris", 19, "sindhi")

// console.log(user1)
// console.log(user2)


function Book(bookName, category, publisher, language, price) {
    this.bookName = bookName
    this.category = category
    this.publisher = publisher
    this.language = language
    this.price = price
}

let book2 = new Book("Holy Quran", "Islamic", "Maktabatul Madina", "Arabic", 500)
let book1 = new Book("Atomic Habits", "Science", "Einstien", "English", 10)

// console.log(book1)
// console.log(book2)

// let current_date = new Date()
// console.log(current_date)


function Vehicle(name, price, model) {
    this.name = name
    this.price = price
    this.model = model
    this.greet = function () {
        console.log(`hello ${name}`)
    }
}

let honda_70 = new Vehicle("honda 70", 100000, "2024")
let honda_125 = new Vehicle("honda 125", 250000, "2022")
let honda_150 = new Vehicle("honda 150", 400000, "2020")

// honda_150.greet()

// console.log(honda_70)
// console.log(honda_125)
// console.log(honda_150)

// const userObj = {
//     name: "hello",
//     age: 15,
//     subjects: ["urdu", "english"],
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     },
//     greet_user: function () {
//         console.log("hello user")
//     }
// }

// userObj.greet_user()

// function User(name, favSubject) {
//     this.username = name
//     this.fav__subject = favSubject
// }

// class User {
//     constructor(name, favSubject) {
//         this.username = name
//         this.fav__subject = favSubject
//     }
// }

// let user_1 = new User("jahangir", "english")
// let user_2 = new User("alamgir", "arabic")

// console.log(user_1)
// console.log(user_2)
