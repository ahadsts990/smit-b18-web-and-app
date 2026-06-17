import "./index.scss"
import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    const headerData = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Contact",
            path: "/contact"
        },
        {
            label: "Services",
            path: "/services"
        },
        {
            label: "Gallery",
            path: "/gallery"
        },
    ]

    return (
        <div className="header">
            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/026/848/822/small/big-cartoon-tree-vector.jpg"
                width={200}
                height={200}
            /> */}
            <ul>
                {headerData.map((data, i) => {
                    return (
                        <li key={i}>
                            <Link to={data.path}>{data.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Header