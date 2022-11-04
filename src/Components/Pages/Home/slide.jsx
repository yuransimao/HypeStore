import Styles from"./styles.module.scss"
import {Link} from "react-router-dom"
import iphone from "../../../ImgandVideo/iPhoneX.mp4"

export function Slide(){
    return(
        <section className={Styles.section}>
               <video autoPlay loop muted playsInline className={Styles.backVideo} >
                <source  src={iphone}/>
               </video>
               <div  className={Styles.text}>
                <h1 datatext="Welcome Hype Store">Welcome Hype Store</h1>
                
                <div className={Styles.Btn1}>
                    <Link to="/Loja">Get Store</Link>
                </div>
               </div>

            </section>
    )
    }