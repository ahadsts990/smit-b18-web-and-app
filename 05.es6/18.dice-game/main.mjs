function roll_dice() {
    let output = document.querySelector(".output")
    const num = Math.round(Math.random() * 6)

    if (num == 1) {
        output.innerHTML = `<i class="bi bi-dice-1"></i>`
    } else if (num == 2) {
        output.innerHTML = `<i class="bi bi-dice-2"></i>`
    } else if (num == 3) {
        output.innerHTML = `<i class="bi bi-dice-3"></i>`
    } else if (num == 4) {
        output.innerHTML = `<i class="bi bi-dice-4"></i>`
    } else if (num == 5) {
        output.innerHTML = `<i class="bi bi-dice-5"></i>`
    } else if (num == 6) {
        output.innerHTML = `<i class="bi bi-dice-6"></i>`
    }
    
    document.querySelector(".my-audio").play()

}
