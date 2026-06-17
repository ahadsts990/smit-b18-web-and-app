import "./Header.scss"

export const Header = () => {
    const headerData = [
        {
            link: "https://eaisoft.com",
            label: "Home",
        },
        {
            link: "https://aicarz.com",
            label: "About",
        },
        {
            link: "https://carzai.co.uk",
            label: "Contact",
        },
        {
            link: "https://sellkar.pk",
            label: "Gallery",
        },
        {
            link: "https://kenvoice.ai",
            label: "Vision",
        },
    ]

    return (
        <div className="header">
            <h3>Logo</h3>
            <ul>
                {headerData.map((item) => {
                    return (
                        <li>
                            <a href={item.link} target="_blank">{item.label}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}