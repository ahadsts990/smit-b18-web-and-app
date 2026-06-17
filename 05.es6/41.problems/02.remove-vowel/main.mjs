function remove_vowel() {
    let input = document.querySelector(".input").value

    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let result = ""

    // "hello world"
    for (let i = 0; i < input.length; i++) {

        if (!vowels.includes(input[i])) {
            result += input[i]
        }

    }

    document.querySelector(".output").innerText = result

}