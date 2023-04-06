import {Card} from "../../Layout/Card/card"
import { smile, Arrow, folder} from "../../Layout/Icons/icons"
import { Link } from "react-router-dom"
import Styles from"./styles.module.scss"
import {MdKeyboardArrowRight} from "react-icons/md"
import  { useState } from 'react';



export function Loja(){
    const [selecao, setSelecao] = useState('');

    const handleSelecao = (e) =>{
        setSelecao(e.target.value)
        console.log(selecao)
    }
   
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
           <p>Buy refurbished phones for cheap when you shop at Hype Store. Explore our range of refurbished android phones and iPhones and grab yourself the latest and cheapest smartphone only at Hype Store. Help prevent e-waste and buy refurbished phones instead.</p>
           
       </div>
       <div className={Styles.wapper_options}> 
       <button>
        <label>Sort by</label>
        <span>
            <select value={selecao} onChange={handleSelecao}>
                <option  hidden='hidden'  value></option>
                <option value='Best seletter-0'>Best seletter</option>
                <option value='Price : Low to High-1'>Price : Low to High</option>
                <option value='Price : High to Low-2'>Price : High to Low</option>
            </select>
        </span>
        </button>

       </div>
   </div>
   </div>
</div>

    )
}