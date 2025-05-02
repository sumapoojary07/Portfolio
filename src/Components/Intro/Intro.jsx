import './Intro.css'
import Github from '../../assets/github.png'
import LinkdIn from '../../assets/linkedin.png'
// import Instagram from '../../assets/instagram.png'
// import Vector from '../../assets/vector.jpg'
//import crown from '../../assets/crown.png'
import me from '../../assets/me.jpg'
//import FloatingDiv from '../FloatingDiv/FloatingDiv.jsx'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Intro=()=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Sumalatha</span>
                    <span>Frontend developer with a passion 
                    for creating user-friendly web interfaces. 
                    A fresher eager to learn and grow in the
                    industry.</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    
                    <a href="https://github.com/sumapoojary07"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/sumalatha-poojary-a96b912aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={LinkdIn} alt="" /></a>
                    
                    {/* <a href="https://www.google.com/"><img src={Instagram} alt="" /></a> */}
                </div>
            </div>

            <div className="i-right">
               <img  className="profile-img" src={me} alt="" />
               {/* <div>
                 <FloatingDiv txt1='Web' txt2='Developer'/>
               </div> */}
            </div>  
        </div>
    )
}
export default Intro