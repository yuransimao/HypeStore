import {Card} from "../../Layout/Card/card"
import { useState, useEffect} from "react"
import Styles from"./styles.module.scss"
import {BiCategory} from "react-icons/bi"
import {BsPhoneFill} from "react-icons/bs"

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
       
    <div className={Styles.categoria}>
        <div className={Styles.categoria_icon}><BiCategory/> <h1>Category</h1></div>
        <div className={Styles.Category_Item}>
          
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