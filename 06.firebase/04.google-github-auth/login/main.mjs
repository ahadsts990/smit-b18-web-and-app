import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

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
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login done")
        })
        .catch((error) => {
            console.log(error.message)
            alert("error in login")
        });

})

document.querySelector(".google-btn").addEventListener('click', () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("google login done")
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

})

document.querySelector(".github-btn").addEventListener('click', () => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            console.error(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GithubAuthProvider.credentialFromError(error);
        });

})

