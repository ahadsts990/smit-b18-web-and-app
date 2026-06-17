// asynchronous javascript ===> takes time
// synchronous javascript  ===> execute immidiately

const getUserData = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            resolve(resp.data)

        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

const get__data = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        // console.log(response.data)
        const result = document.querySelector(".output")
        response.data.forEach(async (singleData) => {
            const userData = await getUserData(singleData.userId)
            console.log(userData)

            // ternary operator
            result.innerHTML += `
                <div class="product-card">
                    <h3>userID: ${singleData.userId}</h3>
                    <h3>username: ${userData.name}</h3>
                    <h5>email: ${userData.email}</h5>
                    <h4>Task: ${singleData.title}</h4>
                    <h3>${singleData.completed ? "Completed" : "InComplete"}</h3>
                    </div>
                    `
            // <button onclick="getUserData(${singleData.userId})">Get User Details</button>
        });

    } catch (error) {
        console.log(error)
    }
}

get__data()

