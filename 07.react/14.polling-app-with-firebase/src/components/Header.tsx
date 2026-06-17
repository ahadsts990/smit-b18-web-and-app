import { AntdButton } from "./AntdButton"
import "./index.scss"

const Header = () => {
    const logout = () => {
        console.log("logout runnning")
    }

    return (
        <div className="header">
            <h3>Polling App</h3>
            <div>
                <b>user@gmail.com</b>
                <AntdButton text="Logout" onClick={logout} />
            </div>
        </div>
    )
}

export default Header