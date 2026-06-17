import "./Post.scss"

import { IoMdThumbsUp } from "react-icons/io";
import { MdComment } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";

export const Button = (props) => {
    return (
        <button>
            <props.icon />
            {props.text}
        </button>
    )
}

export const Post = (props) => {
    return (
        <div className="single-post">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <img src={props.image} alt="image" />
            {/* <video src={props.video} alt="video" controls loop /> */}
            <div className="btn-container">
                <Button text="Like" icon={IoMdThumbsUp} />
                <Button text="Comment" icon={MdComment} />
                <Button text="Share" icon={IoShareSocial} />
            </div>
        </div>
    )
}
