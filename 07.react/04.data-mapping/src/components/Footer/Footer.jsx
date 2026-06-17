import "./Footer.scss"
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    const footerSocialLinks = [
        {
            link: "https://facebook.com",
            icon: <FaFacebookSquare />,
        },
        {
            link: "https://linkedin.com",
            icon: <FaLinkedin />
        },
        {
            link: "https://youtube.com",
            icon: <FaYoutube />
        },
        {
            link: "https://instagram.com",
            icon: <FaInstagramSquare />
        },
    ]

    const footerLink = [
        {
            title: "Home",
            links: [
                {
                    link: "https://benifyexteriors.com",
                    label: "About Us"
                },
                {
                    link: "https://aicarz.com",
                    label: "Vision"
                },
                {
                    link: "https://carzai.co.uk",
                    label: "Support"
                },
                {
                    link: "https://technetcloud.co",
                    label: "Our Mission"
                },
            ]
        },
        {
            title: "Products",
            links: [
                {
                    link: "https://benifyexteriors.com",
                    label: "Privacy Policy"
                },
                {
                    link: "https://aicarz.com",
                    label: "Terms & Conditions"
                },
                {
                    link: "https://carzai.co.uk",
                    label: "Refund Policy"
                },
                {
                    link: "https://technetcloud.co",
                    label: "FAQ"
                },
            ]
        },
        {
            title: "Contact Us",
            links: [
                {
                    link: "https://benifyexteriors.com",
                    label: "Email"
                },
                {
                    link: "https://aicarz.com",
                    label: "Phone"
                },
                {
                    link: "https://aicarz.com",
                    label: "Whatsapp"
                },
            ]
        }
    ]

    return (
        <div className="footer">
            <div className="first-col">
                <h3>Footer Logo</h3>
                <p>
                    Ready to explore the possibilities? Dive deeper into our products, learn about our visionary team, or check out our latest blogs for insights into the world of AI and mobile technology. We invite you to be part of the future - explore, innovate, and transform with EAIsoft.
                </p>
                <a href="https://technetcloud.co">EAIsoft Ltd, 7 Bell Yard, London, WC2A 2JR</a>
                <div className="social-links">
                    {footerSocialLinks.map((item) => {
                        return (
                            <a href={item.link} target="_blank">{item.icon}</a>
                        )
                    })}
                </div>
            </div>

            {footerLink.map((item) => {
                return (
                    <div className="footer-cols">
                        <h3>{item.title}</h3>
                        <ul>
                            {item.links.map((singleLink) => {
                                return (
                                    <li>
                                        <a href={singleLink.link} target="_blank">{singleLink.label}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
