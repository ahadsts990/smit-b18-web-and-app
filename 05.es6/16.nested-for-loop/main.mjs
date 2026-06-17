// const cities = [
//     ["karachi", "peshawar", "islamabad"],
//     ["patna", "bihar", "haryana"],
//     ["new york", "chicago", "california"]
// ]

// i = 1

// for (let i = 0; i < cities.length; i++) {
//     console.log("loop 1==> ", cities[i])

//     for (let j = 0; j < cities[i].length; j++) {
//         console.log("loop 2==> ", cities[i][j])
//     }
// }

const asian_teams = ["Pakistan", "India", "Srilanka"]
const world_teams = ["Australia", "England", "Newzealand"]

for (let i = 0; i < asian_teams.length; i++) {
    for (let j = 0; j < world_teams.length; j++) {
        console.log(asian_teams[i], " vs " ,world_teams[j])
    }
}

