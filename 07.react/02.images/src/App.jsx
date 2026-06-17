import "./main.scss"
// import myPicture from "./assets/my-image.avif"

import { HiHomeModern } from "react-icons/hi2";
import { ImHtmlFive } from "react-icons/im";
import { FaReact } from "react-icons/fa";

import { Post } from "./components/Post"


function App() {

  const sayHello = () => {
    alert("hello user")
  }

  const printSomething = () => {
    console.log("print is here")
  }

  return (
    <div>
      <Post
        title="Hello text"
        text="hd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah d"
        id="1"
        fun={sayHello}
        code={
          <a href="https://google.com" target="_blank">click me</a>
        }
      />
      <Post
        title="some title"
        text="hd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah d"
        id="2"
        fun={printSomething}
      />
      <Post
        title="SMIt CLass Title"
        text="hd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah dhd hjkdah d"
        id="3"
      />

      {/* <HiHomeModern className='icon' />
      <ImHtmlFive className='icon' />
      <FaReact />
      <br />
      <br />
      <br />
      <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <br /> */}
      {/* <img src={myPicture} alt="my image" /> */}
      {/* <br />
      welcome to my app hello world
      <br />
      <a target='_blank' href="https://saylanimit.com">click me</a>
      <br />
      <br />
      {12 + 8}
      <br />
      12 + 8 * 90
      <br /> */}
    </div>
  )
}

export default App
