// pillars of oops

// - Encapsulation
// - Abstraction
// - Polymorphism
// - Inheritance


// - 01. Encapsulation
// data aur function ko aik unit main rkhna... taakay wo 2sry data ky sath conflict naa krain
class Student_ {
    constructor(totalMarks, obtMarks) {
        this.totalMarks = totalMarks
        this.obtMarks = obtMarks
        this.getPercentage = function () {
            return (this.obtMarks / this.totalMarks) * 100
        }
    }
}

const std1 = new Student_(100, 70)
const std2 = new Student_(180, 90)

// console.log(std1.getPercentage())
// console.log(std2.getPercentage())




// - 02. Abstraction
// user ko sirf kch necessary details dikhaana aur internal process ko hide krna
class Atm {
    constructor(amount) {
        this.amount = amount
        this.getMoney = function (withdraw) {
            if (withdraw > this.amount) {
                alert("ATM out of cash")
                return
            }

            this.amount = this.amount - withdraw
        }
        this.addMoney = function (deposit) {
            this.amount = this.amount + deposit
        }
    }
}

const myAtm = new Atm(1000)
myAtm.getMoney(100)
myAtm.getMoney(100)
myAtm.addMoney(200)
myAtm.addMoney(500)
myAtm.getMoney(600)
// console.log(myAtm)




// - 03. Polymorphism
// different classes main same naam sy methods ho skty hain, lekn unka kaam alag alag hoga

class Circle {
    constructor() {
        this.getDetails = function () {
            console.log("circle is round 🟢")
        }
    }
}

class Square {
    constructor(parameters) {
        this.getDetails = function () {
            console.log("square has 4 sides 🟦 and all are equal")
        }
    }
}

const circle = new Circle()
// circle.getDetails()

const square = new Square()
// square.getDetails()







// - 04. Inheritance
// 

class User {
    constructor(name, role, age, dob) {
        this.name = name
        this.role = role
        this.age = age
        this.dob = dob
    }
}

class Student extends User {
    constructor(name, role, rollNo, section, age, dob) {
        super(name, role, age, dob)
        this.rollNo = rollNo
        this.section = section
    }
}

class Teacher extends User {
    constructor(name, role, id, subject, age, dob) {
        super(name, role, age, dob)
        this.id = id
        this.subject = subject
    }
}

const std_1 = new Student("Ahmed Raza", "student", "12345", "A", 22, "02 january")
console.log(std_1)

const teacher_1 = new Teacher("Sir Ahad", "teacher", "00000902", "Web", 21, "30 december")
console.log(teacher_1)
