// function mouse_move(e) {
//     console.log(e)
// }

// document.body.addEventListener("touchmove", (e) => {
//     console.log("touchstart===> ", e)
// })


function key_down_event(event) {
    console.log(event.key)
    if (event.key === 'a' || event.key === 'A') {
        alert("key pressed")
    }

    if (event.key === 'CapsLock') {
        prompt("enter your name")
    }

    if (event.key === '/') {
        document.querySelector('#input').focus()
    }
}
