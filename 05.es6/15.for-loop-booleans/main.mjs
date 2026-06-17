let cleanest_cities = [
    "kashmir", "lahore", "islamabad", "istanbul",
    "new york", "canada", "california",
    "chicago", "dubai", "tokyo",
]

let userCity = prompt("enter your city name")
let cityFound = false

// islamabad

for (let i = 0; i < cleanest_cities.length; i++) {
    if (cleanest_cities[i].toLowerCase() === userCity.toLowerCase()) {
        cityFound = true
        break
    }
}

if (cityFound) {
    alert("your city is cleanest")
} else {
    alert("your city not found in the list")
}