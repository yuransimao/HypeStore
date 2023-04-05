import {Card} from "../../Layout/Card/card"
import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import Styles from"./styles.module.scss"
import {MdKeyboardArrowRight} from "react-icons/md"


export function Loja({addItems,funcNav}){

 
 
    const [Data, setDataimg] = useState([])
    
    
    funcNav(true)
    return (
   
<div className={Styles.Lojabox}>
   <div className={Styles.Loja_conteiner}>
   <div className={Styles.Loja_Link}>
    <Link to={'/'}>Home <span><MdKeyboardArrowRight/></span></Link>
    <h2>Smartphones</h2>
   </div>
   </div>
</div>

    )
}