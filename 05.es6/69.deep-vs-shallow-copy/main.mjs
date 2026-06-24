// deep copy (changes original & copy both)

const obj = {
    username: "abc_user",
    address: {
        city: "karachi"
    }
}

const deepObj = { ...obj }
deepObj.address.city = "lahore"

console.log(obj)
console.log(deepObj)

const food = {
    name: "burger",
    price: 350,
    facilities: ['cold drink', 'fries']
}

const tea = {
    variant: "elaichi",
    water: false,
    milk: true,
    ingredients: ['milk', 'sugar', 'tea', 'elaichi']
}

const deepCopy = { ...tea, ...food }
deepCopy.variant = "ginger"

console.log(deepCopy)


// shallow copy (only changes original.. not copy)

const userData = {
    username: "abc_user",
    address: {
        city: "karachi"
    }
}

console.log(userData)
const shallowCopy = JSON.parse(JSON.stringify(userData))
userData.address.city = "kashmir"
console.log(shallowCopy)
