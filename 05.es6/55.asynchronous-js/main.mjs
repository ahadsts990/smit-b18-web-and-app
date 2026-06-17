// asynchronous javascript ===> takes time
// synchronous javascript  ===> execute immidiately

const get_products = async () => {
    const output = document.querySelector(".output")

    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response.data)

    response.data.forEach((product) => {
        output.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" />
            <h2>${product.title.slice(0, 18)}...</h2>
            <p>${product.description.slice(0, 90)}...</p>
            <h3>$${product.price}</h3>
            <p>⭐ ${product.rating.rate} (${product.rating.count})</p>
            <button>Add To Cart</button>
        </div>
        `
    });

}

get_products()


function changetheme() {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("body").classList.toggle("light");
}
