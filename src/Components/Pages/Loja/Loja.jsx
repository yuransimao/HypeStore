import {Card} from "../../Layout/Card/card"
import { useState, useEffect} from "react"
import Styles from"./styles.module.scss"
import {Category} from "../../Layout/Categoria/Category"
import {Lojaslide} from "./Lojaslide/Lojaslide"


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
    <Category/>

   <div className={Styles.Loja_slide}> 
   <div className={Styles.grid0}><Lojaslide/></div>
   <div className={Styles.grid1}>
    azul
   </div>
   <div className={Styles.grid2}>
    blue
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