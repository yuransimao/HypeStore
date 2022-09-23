import {Card} from "../../Layout/Card/card"
import Styles from"./styles.module.scss"
import {Link} from "react-router-dom"
import iphone from "../../../Img and Video/iPhoneX.mp4"

export function Home (){
    return(
        <div className={Styles.home} >

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
               <div className={Styles.section2}>
                <div className={Styles.holder}>
                <h2>Best Products</h2>
                 <div className={Styles.box}>
                    <Card/>
                 </div>
                </div>
               </div>
            
        </div>
    )
}