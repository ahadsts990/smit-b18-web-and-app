let num2 = 23
num2 = 56
// num2 = "hello"

// let name = "jumbo"
let username = "jumbo"
username = "12"

let isMale = true
isMale = false
// isMale = "false"


const greetUser = (username: String) => {
    alert("hello " + username)
}

greetUser("first user")

let age: Number = 34
let myName: String = "uncle john"
let isHuman: Boolean = true
let languages: String[] = ["html", "css", "js", "ts"]
let numbers: Number[] = [1, 2, 34, 5]

let multipleData: (String | Number | Boolean)[] = [1, 2, 3, "hello", "bye", true]
// let multipleData: any[] = [1, 2, 3, "hello", "bye", true]


interface User {
    username: String
    age: Number
    isPresent: Boolean
    languages: String[]
}

let user: User = {
    username: "",
    age: 12,
    isPresent: true,
    languages: ["html"]
}

let user2: any = {
    firstname: "user first name",
    lastname: "user last name",
}

user2 = {
    age: 12,
}


// CLASS 2

// type annotation
let num3: number = 45
num3 = 78

let _username: string = "hello user"
_username = "12"

let booleanVar: boolean = true
booleanVar = false


// interface

let users: (string | number | boolean)[] = ["user1", "user2", "user3", false, 23]
users = ["1", "2", "3", 4, 6, true]

interface NormalUser {
    age: number | string
    username: string
    isPresent: boolean
    languages: string[]
}

let userObj: NormalUser = {
    age: 34,
    username: "hello world",
    isPresent: false,
    languages: ["html", "css", "js", "ts"]
}

let multipleTypes: [string, number, boolean] = ["string value", 78, false]
multipleTypes = ["string", 12, true]


// generics

const sum = (num1: number, num2: number): number => {
    return num1 + num2
}

let result = sum(12, 13)
result = 23

const sayHello = (username: string): void => {
    alert("hello " + username)
}

sayHello("hello world user")


// enums

type Role = "ADMIN" | "TEACHER" | "STUDENT" | 56

let role: Role = "ADMIN"
role = "TEACHER"
role = "STUDENT"
role = "ADMIN"
role = 56


// type inference

type Book = {
    bookName: string
    author: string
    price: number
}

const book1: Book = {
    author: "",
    bookName: "",
    price: 55,
}

type Arr = (string | number | boolean | null)[]
const arr: Arr = ["string", 66, true, null]


// union & intersection types

// union (|)
type MyUnion = string | number | boolean
let unionVar: MyUnion = "56"
unionVar = 56
unionVar = true


// intersection (&)
type Person = {
    personName: string
    age: number
}

type Student = {
    rollNo: number
}

type Teacher = {
    subject: string
}


type FinalStudent = Person & Student
let finaStudent: FinalStudent = {
    personName: "",
    rollNo: 12,
    age: 22,
}

type FinalTeacher = Person & Teacher
let finalTecher: FinalTeacher = {
    personName: "",
    subject: "",
    age: 40,
}

// decorator

const LogSomething = (role: string) => {
    return function (constructor: Function) {
        console.log("decorator running..");
        console.log("Role:", role);
        console.log("Class:", constructor.name);
    };
}

@LogSomething("ADMIN")
class SomeClass {
    className: string;
    classTime: string;

    constructor(className: string, classTime: string) {
        this.className = className
        this.classTime = classTime
    }
}
