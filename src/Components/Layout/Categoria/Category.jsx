import Styles from"./styles.module.scss"
import {ImCross} from "react-icons/im"
import {BiCategory} from "react-icons/bi"
import phoneIconphoneIcon from "../../../ImgandVideo/phoneIcon.svg"
import icondomestic from "../../../ImgandVideo/icondomestic.svg"
import { useState} from "react"
import {Link} from "react-router-dom"

export function Category(){
    const [Categoria, setCategoria] =useState(false)

    const dataC =[ {
        cateImg: `${phoneIconphoneIcon}` ,
        cateName: "Iphone"
    },{
        cateImg: `${icondomestic}` ,
        cateName: "Electro domestic"
    }]

    return(

        <>
        
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
        </>
    )
}