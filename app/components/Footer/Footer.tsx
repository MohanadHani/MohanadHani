import {FC} from 'react'
import "./Footer.scss"

interface FooterProps {

}

const Footer: FC<FooterProps> = ({}) => {
    return (
        <div className="footer">
            <p>MADE WITH LOVE</p>
            <p>© 2023</p>
        </div>
    )
}

export default Footer;