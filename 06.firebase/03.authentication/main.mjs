import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const getCurrentUser = async () => {
    try {
        const auth = getAuth();
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                window.location.href = "./posts/index.html"
            } else {
                window.location.href = "./login/index.html"
            }
        });

    } catch (error) {
        console.error(error);
    }
}

getCurrentUser()
