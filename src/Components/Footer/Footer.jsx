import './Footer.css'
import Wave from '../../assets/wave.png'
// import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer=()=>{
    return(
        <div className="footer">
            <img src={Wave} alt="" style={{width:'100%'}}/>
            <div className="f-content">
                <span>sumalathapoojary2508@gmail.com</span>
                <div className="f-icons">
                    {/* <a href="https://www.linkedin.com/in/sumalatha-poojary-a96b912aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <Insta color='white' size='3rem'/>
                    </a> */}
                
                <a href="https://github.com/sumapoojary07" target="_blank" rel="noopener noreferrer">
                        <Github color="white" size="3rem" />
                </a>
                </div>
                <div>Location: Mangaluru-574242</div>
            </div>
        </div>
    )
}
export default Footer