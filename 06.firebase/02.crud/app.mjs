import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, orderBy, doc, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDU0CQ8vxduQlr1qZOH1dWjp3XfYE0IJuc",
    authDomain: "smit-b18.firebaseapp.com",
    projectId: "smit-b18",
    storageBucket: "smit-b18.firebasestorage.app",
    messagingSenderId: "243844172855",
    appId: "1:243844172855:web:49192254a79ffc193ec3b2",
    measurementId: "G-JCL8ZL1GN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// create
const create_post = async (e) => {
    e.preventDefault()
    const title = document.querySelector("#title").value
    const description = document.querySelector("#description").value

    try {

        const docRef = await addDoc(collection(db, "submissions"), {
            title: title,
            description: description,
            cretedOn: new Date().getTime()
        });
        e.target.reset()
        get_data()

    } catch (error) {
        console.error(error)
    }

}

document.querySelector("form").addEventListener('submit', create_post)

// delete
const delete_post = async (id) => {
    try {
        await deleteDoc(doc(db, "submissions", id));
        get_data()
        // window.location.reload()

    } catch (error) {
        console.error(error)
    }
}

// edit
const edit_post = async (id) => {
    let title = prompt("Enter your title")
    let description = prompt("Enter your description")

    try {
        await setDoc(doc(db, "submissions", id), {
            title: title,
            description: description
        });
        get_data()

    } catch (error) {
        console.error(error)
    } finally {
        console.log("finally is running... ")
    }

}

// get
const get_data = async () => {
    const result = document.querySelector(".result")
    result.innerHTML = ""

    try {
        const querySnapshot = await getDocs(collection(db, "submissions"));
        querySnapshot.forEach((doc) => {
            const singlePost = doc.data()
            console.log(singlePost)

            const postCard = document.createElement("div")
            postCard.className = "post"

            const idElement = document.createElement("span")
            idElement.innerText = `id: ${doc.id}`
            postCard.appendChild(idElement)

            const h2Element = document.createElement("h2")
            h2Element.innerText = singlePost.title
            postCard.append(h2Element)

            const pElement = document.createElement("p")
            pElement.innerText = singlePost.description
            postCard.appendChild(pElement)

            const bElement = document.createElement("b")
            bElement.innerText = moment(singlePost.cretedOn).format('MMMM Do YYYY, h:mm:ss a')
            postCard.appendChild(bElement)

            const btnContainer = document.createElement("div")

            const editBtn = document.createElement("button")
            editBtn.innerText = "Edit Post"
            editBtn.onclick = () => edit_post(doc.id)
            btnContainer.appendChild(editBtn)

            const delBtn = document.createElement("button")
            delBtn.innerText = "Delete Post"
            delBtn.onclick = () => delete_post(doc.id)
            btnContainer.appendChild(delBtn)

            postCard.appendChild(btnContainer)
            result.appendChild(postCard)
        });

    } catch (error) {
        console.error(error)
    }
}

get_data()
