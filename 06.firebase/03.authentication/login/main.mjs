import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = "../posts/index.html"
        })
        .catch((error) => {
            console.error(error.message);
        });

})


const getCurrentUser = async () => {
    try {
        const auth = getAuth();
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                window.location.href = "../posts/index.html"
            }
        });

    } catch (error) {
        console.error(error);
    }
}

getCurrentUser()
