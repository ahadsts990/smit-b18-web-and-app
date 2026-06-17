function calculatebmi() {
    const height = document.getElementById("height").value
    const weight = document.getElementById("weight").value

    const heightInMeters = height / 100

    const bmi = weight / (heightInMeters * heightInMeters)

    let result = ""
    if (bmi < 18) {
        result = "you are under weight"
    } else if (bmi > 18 && bmi <= 25) {
        result = "you are normal weight 👍"
    }else if(bmi > 25 && bmi <= 30){
        result = "you are normal weight, optionally lose weight"
    }else if(bmi > 30 && bmi <= 35){
        result = "you are over weight"
    }else{
        result = "you are extremely over weight 😂"
    }
    
    document.getElementById("result").innerText = result

}