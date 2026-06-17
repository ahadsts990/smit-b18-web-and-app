import { getFirestore, collection, addDoc, getDocs, orderBy, doc, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { app } from "../firebase.mjs";

const db = getFirestore(app);

// create
const create_post = async (e) => {
    e.preventDefault()
    const title = document.querySelector("#title").value
    const description = document.querySelector("#description").value

    var email = ""

    const auth = getAuth();
    await onAuthStateChanged(auth, (user) => {
        email = user.email
    });

    try {

        const docRef = await addDoc(collection(db, "posts"), {
            title: title,
            description: description,
            cretedOn: new Date().getTime(),
            email: email
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
        await deleteDoc(doc(db, "posts", id));
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
        await setDoc(doc(db, "posts", id), {
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
        const querySnapshot = await getDocs(collection(db, "posts"));
        var email = ""
        const auth = getAuth();
        await onAuthStateChanged(auth, (user) => {
            email = user.email
        });

        querySnapshot.forEach((doc) => {
            const singlePost = doc.data()

            const postCard = document.createElement("div")
            postCard.className = "post"

            const idElement = document.createElement("span")
            idElement.innerText = `id: ${doc.id}`
            postCard.appendChild(idElement)

            const mailElement = document.createElement("div")
            mailElement.innerText = singlePost.email
            postCard.appendChild(mailElement)

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


            // agr user ka email match krta hai post email sy

            if (email === singlePost.email) {
                postCard.appendChild(btnContainer)
            }


            result.appendChild(postCard)
        });

    } catch (error) {
        console.error(error)
    }
}

get_data()

// auth

const getCurrentUser = async () => {
    try {
        const auth = getAuth();
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                document.querySelector(".email").innerText = user.email
            } else {
                window.location.href = "../login/index.html"
            }
        });

    } catch (error) {
        console.error(error);
    }
}

getCurrentUser()


// logout
document.querySelector(".logout-btn").addEventListener("click", () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = "../login/index.html"

    }).catch((error) => {
        console.error(error);
    });
})
