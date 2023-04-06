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

   <div className={Styles.Loja_wapper}>

       <div className={Styles.wapper_text}>
           <h1>Refurbished Smartphones</h1>
           <p>Buy refurbished phones for cheap when you shop at Back Market. Explore our range of refurbished android phones and iPhones and grab yourself the latest and cheapest smartphone only at Back Market. Help prevent e-waste and buy refurbished phones instead.</p>
       </div>
       <div className={Styles.wapper_options}> 
        <select>
            <option>Best seletter</option>
            <option>Price : Low to High</option>
            <option>Price : High to Low</option>
        </select>
       </div>
   </div>
   </div>
</div>

    )
}