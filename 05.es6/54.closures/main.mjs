// closures

// wo function jo apny kisi aur function sy value lain

const myFun = () => {
    // 0, 1
    let count = 0

    return () => {
        console.log(count++)
        // console.log(++count)
    }
}

const count1 = myFun()

count1() // 0, 
count1()
count1()
count1()
count1()
count1()
count1()
count1()
