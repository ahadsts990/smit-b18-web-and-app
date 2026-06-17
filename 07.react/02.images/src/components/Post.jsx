import "./post.scss"

export const Post = (props) => {
    return (
        <div className="post">
            <h3>{props.id}</h3>
            <h1>{props.title}</h1>
            <p>
                {props.text}
            </p>
            <button onClick={props.fun}>Like</button>

            {props.code}

        </div>
    )
}
