// set

// const arr1 = [1, 2, 3]
// const arr2 = arr1
// console.log(arr1 == arr2)

const my_arr = [1, 2, 3, 3, 4, 5, 5, 1, 7, 2, 3, 4, 5]
// console.log(my_arr)

const my_obj = {
    name: "jumbo",
    father: "uncle john",
    age: 90,
}

// console.log(my_obj)

// set
const my_set = new Set()
my_set.add(1)
my_set.add(2)
my_set.add(2)
my_set.add(2)
my_set.add(3)
my_set.add(3)
my_set.add(4)
my_set.add(5)
my_set.add(6)
my_set.add(6)
my_set.add(6)
my_set.add(6)
my_set.delete(5)
my_set.add(true)
my_set.add(false)
my_set.add("saylani")
my_set.add("saylani")
// my_set.add([1, 2])
// my_set.add([1, 2])

// console.log("my_set==>", my_set)

// difference in set vs array
// set                                      || array

// only unique values are allowed           || duplicate values are allowed
// .delete(), .add(), .size()               || pop(), push(), map(), length, etc
// sets are fast                            || array maybe slow compare to set



// =========================================================================================


// map

const my_object = {
    username: "abc1234",
    name: "ali aftab",
    rollNo: 12345,
    "1": "iam one",
    23: "iam another number",
    skills: ["html", "css", "js"],
    age: 26,
    // ["ali", "jameel", "uzair"]: "names",
    // { user: "abc" }: "iam object"
}

my_object.age = 126

// console.log(my_object)

const my_map = new Map()
my_map.set("username", "abc1234")
my_map.set("age", 26)
my_map.set("name", "junaid khan")
my_map.set(3, "iam three")
my_map.set(33, "iam new number")
my_map.set(["ali", "jameel", "uzair"], "iam am array of numbers")
my_map.set({ username: "tanveer", age: 28 }, "iam am object of user")
my_map.set("username", "xyz990")

my_map.delete(33)
// console.log(my_map.get("username"))
// console.log(my_map.entries())
// console.log(my_map.keys())
// console.log(my_map.values())
// my_map.clear()

// console.log(my_map)

// difference in map vs object

// map                                      || object

// dont follow alphabetical order           || follow alphabetical order
// array & objects are allowed as a key     || array & objects are not allowed as a key

