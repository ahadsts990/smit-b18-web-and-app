import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const data = [
        {
            path: "/",
            label: "Home"
        },
        {
            path: "/about",
            label: "About"
        },
        {
            path: "/contact",
            label: "Contact"
        },
        {
            path: "/gallery",
            label: "Gallery"
        },
    ]

    return (
        <div>
            <ul>
                {data.map((singleData, index) => {
                    return (
                        <li key={index}>
                            <Link to={singleData.path}>{singleData.label}</Link>
                            {/* <a href={singleData.path}>{singleData.label}</a> */}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Navbar