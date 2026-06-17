const h1Elements = document.querySelectorAll("h1");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    h1Elements.forEach((h) => {
        let size = 20 + scrollY * 0.2; // base size + slower growth

        // Limit the size
        if (size > 100) size = 100;
        if (size < 20) size = 20;

        h.style.fontSize = size + "px";
    });
});
