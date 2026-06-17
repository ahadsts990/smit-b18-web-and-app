const name = "jonas"

const first = () => {
    let a = 1
    const b = second()
    a = a + b
    return a
}

const second = () => {
    var c = 2
    return c
}

const x = first()
