import { useSelector } from "react-redux"
import { AntdButton } from "./AntdButton"
import "./index.scss"

const Header = () => {
    const currentUser = useSelector((state: any) => state.user)

    const logout = () => {
        console.log("logout runnning")
    }

    return (
        <div className="header">
            <h3>Polling App</h3>
            <div>
                <b>{currentUser.email}</b>
                <AntdButton text="Logout" onClick={logout} />
            </div>
        </div>
    )
}

export default Header