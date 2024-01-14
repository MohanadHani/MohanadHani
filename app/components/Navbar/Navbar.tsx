import {FC} from 'react'
import "./Navbar.scss"
import Link from "next/link";

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="left">
                    <p>Mohanad Hani</p>
                    <p>Software Engineer</p>
                </div>
                <div className="right">
                    <p>Riyadh</p>
                    <p>Saudi Arabia</p>
                </div>
            </div>
            <div className="mid-button">
                <Link href="#">Available for Work</Link>
            </div>
        </div>

    )
}

export default Navbar;