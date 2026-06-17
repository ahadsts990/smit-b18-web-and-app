// < 10 ==> too cold you may ill
// < 20 ==> too cold dont go outside
// < 30 ==> cold take a jacket
// < 35 ==> normal temperature
// < 40 ==> too much heat take a water bottle
// >50 ==> too much heat, you may have a heat stroke

let temperature = prompt("enter temperature of your area")

if (temperature >= 50) {
    alert("too much heat, you may have a heat stroke")

} else if (temperature >= 40 && temperature < 50) {
    alert("too much heat take a water bottle")

} else if (temperature >= 30 && temperature < 40) {
    alert("normal temperature")

} else if (temperature >= 20 && temperature < 30) {
    alert("cold take a jacket")

} else if (temperature >= 10 && temperature < 20) {
    alert("too cold dont go outside")

} else {
    alert("too cold you may ill")
}
