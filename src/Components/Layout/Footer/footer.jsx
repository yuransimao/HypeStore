import Styles from "./styles.module.scss"
import {Lista} from "../Lista/lista"
import { Link } from "react-router-dom"

export function Footer(){
    return(
        <div className={Styles.Footer}>
            <div className={Styles.Footer_items}>
                <p>Hello there! We're Hype Store, the leading online marketplace dedicated to refurbished devices. Our mission is to make restored devices mainstream. Making old the 'new new' so to speak.</p>

                <div className={Styles.Footer_items_lista}>
                    <Lista
                    CustomClass='Lista_Secundaria'
                    text={'About'}
                    text1={'Who are we?'}
                    text2={'Student Discount'}
                    text3={`We're hiring! - Want/Fancy a job?`}
                    text4={`Press`}
                    />
                    <Lista
                    CustomClass='Lista_Secundaria'
                    text={'Help'}
                    text1={'Sellers: Register to sell'}
                    text2={'Seller portal'}
                    text3={`Payments`}
                    text4={`Delivery`}
                    text5={'Contact us - Get in touch'}
                    text6={'Guides and Reviews'}
                    text7={'Compare devices'}
                    />
                    <Lista
                    CustomClass='Lista_Secundaria'
                    text={'Law and order'}
                    text1={'Terms of service'}
                    text2={'General terms and conditions of sale'}
                    text3={`Data protection`}
                    text4={`Cookies`}
                    text5={'Other legal information'}
                    text6={'Commercial warranty'}
                    text7={'Legal notices'}
                    />
                    
                    <Lista
                    CustomClass='Lista_Secundaria'
                    text={'Hello there!'}
                    text1={'Trustpilot'}
                    text2={'Glassdoor'}
                    text3={`Medium`}
                    text4={`Deep Fried Mars Bars`}
                    />
                </div>
                <div className={Styles.Footer_items_icons}>
                <h1><span>&copy;</span>2023 Hype Store</h1>

               <span><h2>Densenvolvido by:</h2> <a href={'https://github.com/yuransimao'} target={"_blank"}>Yuran Simao</a> </span>
                </div>
            </div>
        </div>
    )
}