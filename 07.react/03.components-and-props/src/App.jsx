import "./main.scss"
import { Post } from "./components/Post/Post"
import image1 from "./assets/image-1.avif"
import image2 from "./assets/image-2.avif"
import image3 from "./assets/image-3.avif"
import image4 from "./assets/image-4.avif"
import image5 from "./assets/image-5.avif"
import myvideo from "./assets/video.mp4"

function App() {

    const all_posts = [
        {
            image: image5,
            video: myvideo,
            title: "here is the image 5 post for new courses",
            text: "some description about courses is here to see this is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thi"
        },
        {
            image: image1,
            video: myvideo,
            title: "here is the Saylani new post for new courses",
            text: "some description about courses is here to see this is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thi"
        },
        {
            image: image2,
            video: myvideo,
            title: "here is the SMIT post",
            text: "some description is here to see this is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thi"
        },
        {
            image: image3,
            video: myvideo,
            title: "this is my new post",
            text: "this is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thi"
        },
        {
            image: image4,
            video: myvideo,
            title: "this is my second post",
            text: "this is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thi"
        },
        {
            image: image5,
            video: myvideo,
            title: "this is my third post",
            text: "this is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thithis is my new post this is my new post thi"
        },
    ]

    return (
        <div className="all-posts">
            {all_posts.map((singlePost) => {
                return <Post
                    key={singlePost.title}
                    title={singlePost.title}
                    text={singlePost.text}
                    image={singlePost.image}
                    video={singlePost.video}
                />
            })}
        </div>
    )
}

export default App
