import "./index.scss"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = () => {
    const headerOptions = [
        {
            label: "Home",
            link: "https://saylanimit.com"
        },
        {
            label: "About",
            link: "https://saylanimit.com"
        },
        {
            label: "Contact",
            link: "https://saylanimit.com"
        },
        {
            label: "Gallery",
            link: "https://saylanimit.com"
        },
    ]

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="header">
            <h2>Logo</h2>
            <ul className="desktop">
                {headerOptions.map((option) => {
                    return (
                        <li>
                            <a href={option.link}>{option.label}</a>
                        </li>
                    )
                })}
            </ul>

            <div className="mobile">
                <GiHamburgerMenu className="menu-icon" onClick={() => setMenuOpen(true)} />
                {
                    menuOpen ?
                        <div className="main-menu">
                            <ImCross className="menu-icon cross-icon" onClick={() => setMenuOpen(false)} />
                            <ul>
                                {headerOptions.map((option) => {
                                    return (
                                        <li>
                                            <a href={option.link}>{option.label}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div> :
                        null
                }
            </div>
        </div>
    )
}

export default Header
