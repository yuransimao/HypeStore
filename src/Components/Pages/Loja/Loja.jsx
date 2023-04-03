import {Card} from "../../Layout/Card/card"
import { useState, useEffect} from "react"
import Styles from"./styles.module.scss"
import {Category} from "../../Layout/Categoria/Category"
import {Lojaslide} from "./Lojaslide/Lojaslide"


export function Loja({addItems,funcNav}){

 
 
    const [Data, setDataimg] = useState([])
    
    
    funcNav(true)
    return (
   
<div className={Styles.Lojabox}>
   Loja
</div>

    )
}