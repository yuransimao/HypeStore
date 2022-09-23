import Styles from "./styles.module.scss"
import nokia from "../../../Img and Video/nokia-1.png"
import { Link } from "react-router-dom"
import { useState} from "react"
import {ImCross} from "react-icons/im"


export function Card(){
    
    const [Showviw, setShowviw] = useState(false)
    const handleChange = () =>{
        setShowviw(!Showviw)
    }

    const handleClose= () => {setShowviw(false)}
    return(
        <div className={Styles.Boxs}>
            <div className={Styles.card}>
                <div className={Styles.Cardproductname}>
                    <h1>Iphone</h1>
                </div>
                <div className={Styles.CardPrice}>
                    <span>$300.000</span>
                </div>
                <div className={Styles.Cardimg}>
                    <img src={nokia} alt="ipone" />
                </div>
                <div className={Styles.Cardbutton}> 
                    <button onClick={handleChange}> Quick Viw</button>
                </div>
            </div>

            {Showviw ?

            <div className={Styles.popViwesActive} >

                <div className={Styles.popCard}>
                   <button onClick={handleClose}> <ImCross/></button>
                
                <div className={Styles.popCardimg}>
                <img src={nokia} alt="ipone" />
                </div>

                <div className={Styles.popcardinfo}>
                    <div className={Styles.popcardinfoname}>
                        <h2>Nokia</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus, ad atque totam blanditiis ut similique facilis magnam possimus animi voluptatem odio! Laudantium, quos nesciunt. Enim ea officiis explicabo aut?</p>
                    <span className={Styles.popCardprice}>$400.000</span>
                    <Link className={Styles.popcardDetBtn}>Ver mais detalhes...</Link>
                    <Link className={Styles.popcardCBtn}>Compra ja</Link>
                </div>
            </div>
            </div>
            : ''}
        </div>
    )
}