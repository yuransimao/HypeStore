import {Card} from "../../Layout/Card/card"
import { useState, useEffect} from "react"
import Styles from"./styles.module.scss"
import {BiCategory} from "react-icons/bi"
import {BsPhone} from "react-icons/bs"
import phoneIcon from "../../../ImgandVideo/phoneIcon.svg"
import icondomestic from "../../../ImgandVideo/icondomestic.svg"
import { Link } from "react-router-dom"
export function Loja({addItems,funcNav}){
    const [Data, setDataimg] = useState([])
    
    
    useEffect (() => {
        fetch("http://localhost:5000/imagem",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })
        .then(response => response.json())
        .then(data => setDataimg(data))
        .catch(error => console.error(error))
        
    },[])
    funcNav(true)
    return (
   
<div className={Styles.Lojabox}>
    
    <div className={Styles.categoria_icon}><BiCategory/> </div>
   
    <div className={Styles.categoria}>
        <div className={Styles.Category_Item}>
        
        <ul>

        <li>
        <div className={Styles.Category_itemIcon}>
            <span><img src={phoneIcon} alt="phone"/></span>
        </div>
        <Link>Acessorios</Link>
        </li>
        
        <li>
        <div className={Styles.Category_itemIcon}>
        <span><img src={phoneIcon} alt="phone"/></span>
        </div>
        <Link>Iphones</Link>
        </li>
        <li>

        <div className={Styles.Category_itemIcon}>
        <span><img src={icondomestic} alt="icondomestic"/></span>
        </div>
        <Link>Electrico</Link>
        </li>

        </ul>
        </div>
    </div>
                       <div className={Styles.cardloaja}>
                        
                  {Data.map((item)=>(
                        <Card
                        key={item.id}
                        addItems={addItems}
                        name={item.name}
                        price={item.Price}
                        oldPrice={item.oldPrice}
                        img={item.img}
                        Data={item}
    

                        />
                       ))}
                    
                       </div>
                 </div>

    )
}