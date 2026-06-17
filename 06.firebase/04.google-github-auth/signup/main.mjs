import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAo5PnAN7HiQWMT8xmvHpRJ3tITQHXe2xQ",
    authDomain: "my-project-smit.firebaseapp.com",
    projectId: "my-project-smit",
    storageBucket: "my-project-smit.firebasestorage.app",
    messagingSenderId: "460975439671",
    appId: "1:460975439671:web:367c664199f104516124b2",
    measurementId: "G-JEDLGLQB8Y"
};

const app = initializeApp(firebaseConfig);

document.querySelector(".btn").addEventListener('click', () => {

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup done")
        })
        .catch((error) => {
            alert("error in signup")
        });

})