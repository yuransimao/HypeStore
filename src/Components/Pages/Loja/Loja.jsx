import {Card} from "../../Layout/Card/card"
import { useState, useEffect} from "react"
import Styles from"./styles.module.scss"
import {BiCategory} from "react-icons/bi"
import {ImCross} from "react-icons/im"
import phoneIconphoneIcon from "../../../ImgandVideo/phoneIcon.svg"
import icondomestic from "../../../ImgandVideo/icondomestic.svg"
import { Link } from "react-router-dom"


export function Loja({addItems,funcNav}){

 
   const dataC =[ {
        cateImg: `${phoneIconphoneIcon}` ,
        cateName: "Iphone"
    },{
        cateImg: `${icondomestic}` ,
        cateName: "Electro domestic"
    }]
 
 
    const [Data, setDataimg] = useState([])
    const [Categoria, setCategoria] =useState(false)
    
    
    
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
    
   
    <div className={Styles.categoria_iconbutton}>
    
        <button onClick={() => setCategoria(!Categoria)}> {Categoria?<ImCross/>:<BiCategory/>}</button>
    </div>
    <div className={Categoria ? `${Styles.categoria_icon}` : `${Styles.categoria}`} >
    <div className={Styles.categoria_iconMenu}>
        {
        dataC.map((item, index) =>{
        return(
        <div className={Styles.Category_Item} key={index}>
        <img src={item.cateImg}/>
        <Link>{item.cateName}</Link>

        </div>
        )
        }

        )
        }
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