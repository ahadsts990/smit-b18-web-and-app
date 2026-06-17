
// private & public properties
// static property in class

class Employee {
    static company = "SMIT"
    #salary

    constructor(username, designation, salary) {
        this.username = username
        this.designation = designation
        this.#salary = salary
        this.getSalary = function () {
            return this.#salary
        }
    }

}

const emp_1 = new Employee("junaid", "policeman", 60000)

console.log(emp_1)
console.log(Employee.company)
// console.log(emp_1.salary)
// console.log(emp_1.getSalary())
