import Styles from "./styles.module.scss"
import {AiOutlineHeart} from "react-icons/ai"
import {GoDiffAdded} from"react-icons/go"
import { Link } from "react-router-dom"




export function Card({clasCard,name, img, price, oldPrice, addItems,Data}){
    
    return(
        
       
        <div className={Styles[clasCard]}>
        <Link>
            <div className={Styles.card_Container}>
                
                <div className={Styles.Cardimg}>
                    <img src={img} alt="ipone" />
                </div>
                <div className={Styles.Cardproduct}>
                    <h1>{name}</h1>
                    <p>Description</p>
                    {price ? <span>$ {price} Kz </span> : ''}
                </div>
                
                
            </div>
        </Link>
            </div>

       
    )
   
    
}