import {Card} from "../../Layout/Card/card"
import { smile, Arrow, folder} from "../../Layout/Icons/icons"
import { Link } from "react-router-dom"
import Styles from"./styles.module.scss"
import {MdKeyboardArrowRight} from "react-icons/md"


export function Loja(){
   
    return (
   
<div className={Styles.Lojabox}>
   <div className={Styles.Loja_conteiner}>

   <div className={Styles.Loja_Link}>
    <Link to={'/'}>Home <span><MdKeyboardArrowRight/></span></Link>
    <h2>Smartphones</h2>
   </div>

   <div className={Styles.Loja_icons}>
        <div className={Styles.Icons}>{smile} <span>Free 30-day returns</span></div>
        <div className={Styles.Icons}>{folder} <span>Free delivery on all items</span></div>
        <div className={Styles.Icons}>{Arrow} <span>1-year minimum warranty</span></div>
        
   </div>
   </div>
</div>

    )
}