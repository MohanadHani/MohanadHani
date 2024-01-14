import {FC} from 'react'
import "./Hero.scss"

interface HeroProps {

}

const Hero: FC<HeroProps> = ({}) => {
    return (
        <div className="hero">
            <h1>mohanad hani</h1>
            <div>
                <p>A Software Engineer based in Riyadh, KSA.</p>
                <p>Currently looking for a Front-End Development job.</p>
            </div>
        </div>
    )
}

export default Hero;