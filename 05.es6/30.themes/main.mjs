function handle_theme_change(theme_class, nextBtnClass) {
    document.querySelector('body').className = theme_class

    let all_btns = document.querySelectorAll('.my-btns')

    for (let i = 0; i < all_btns.length; i++) {
        all_btns[i].style.display = "none"
    }

    document.querySelector(`.${nextBtnClass}`).style.display = "block"

}