// old ES1 to ES5

function User(name, age, address, phone) {
    this.username = name;
    this.userAge = age;
    this.homeAddress = address;
    this.phoneNumber = phone;
    this.sayHello = function () {
        console.log("hello", this.username)
    }
    this.getAge = function () {
        console.log(this.userAge)
    }
    this.setAge = function (passedAge) {
        this.userAge = passedAge
    }
    this.setName = function (passedName) {
        this.username = passedName
    }
    this.increaseAge = function (ageToAdd) {
        this.userAge = this.userAge + ageToAdd
    }
}

// alternative to add methods in class
User.prototype.printUserAndAge = function () {
    console.log(this.username);
    console.log(this.userAge);
}

let user1 = new User("Hammad", 35, "Karachi")
// console.log("user1==> ", user1)
user1.sayHello()
user1.getAge()
user1.setAge(50)
user1.printUserAndAge()
user1.setName("Jumbo")
console.log("user1==> ", user1)


let user2 = new User("Uncle John", 90, "california", "03130019086")
user2.setName("Shakoor")
user2.increaseAge(20)
console.log("user2===> ", user2)







function sayHello(username) {
    // alert("hello " + username)
}

// function
sayHello("user abcd")

const num1 = 45
// method
num1.toFixed(2)

const arr = [1, 2, 3]
arr.forEach(() => {
})

