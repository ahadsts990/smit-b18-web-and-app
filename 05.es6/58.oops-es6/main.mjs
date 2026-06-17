// new ES6

class Book {
    constructor(name, status, author, price) {
        this.bookName = name;
        this.bookStatus = status;
        this.author = author;
        this.price = price;
        this.markSold = function () {
            this.bookStatus = "sold"
        }
        this.markInStock = function () {
            this.bookStatus = "instock"
        }
        this.addFirstName = function (nameToAdd) {
            this.author = nameToAdd + " " + this.author
        }
        this.addLastName = function (lastNameToAdd) {
            this.author = this.author + " " + lastNameToAdd
        }
    }
}

const book1 = new Book("Whiley HTML CSS", "instock", "John Duckett", 100)
book1.markSold()
console.log("book1==> ", book1)

const book2 = new Book("Smarter way to learn javascript", "instock", "Mark Mayers", 120)
book2.markSold()
console.log("book2==> ", book2)

const book3 = new Book("Bange dara", "sold", "Allama Iqbal", 250)
book3.markInStock()
book3.addFirstName("Doctor")
console.log("book3==> ", book3)

const book4 = new Book("Dewaane Ghalib", "instock", "Mirza Ghalib", 80)
book4.addFirstName("Asadullah")
book4.addLastName("Khan")
console.log("book4==> ", book4)

