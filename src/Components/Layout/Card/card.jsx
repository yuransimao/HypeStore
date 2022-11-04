import Styles from "./styles.module.scss"
import {AiOutlineHeart} from "react-icons/ai"
import {GoDiffAdded} from"react-icons/go"
import { Link } from "react-router-dom"
import { useState} from "react"

import {ImCross} from "react-icons/im"



export function Card({name, img, price, oldPrice, addItems,Data}){
    
    const [Showviw, setShowviw] = useState(false)
    const [cont, setcont] = useState(0)
    

    const handleChange = () =>{
        setShowviw(!Showviw)
    }
    const handleClose= () => {setShowviw(false)}
    
    
    function contReac(){
    setcont((prev) =>prev + 1)
    }


        
    

    
   

    return(
        
       
           
        
            <div className={Styles.card}>
                <div className={Styles.Cardproductname}>
                    <h1>{name}</h1>
                </div>
                <div className={Styles.CardPrice}>
                    <span>$ {price} Kz </span>
                </div>
                <div className={Styles.Cardimg}>
                    <img src={img} alt="ipone" />
                </div>
                <div className={Styles.Cardbutton}> 
                    <button onClick={handleChange}> Quick Viw</button>
                </div>
                
                <div className={Styles.cardReaçoes}>
                <div className={Styles.Reaçoes}>{ cont}</div>
                    <button onClick={contReac}><AiOutlineHeart/></button>
                </div>
                <div  className={Styles.Cardadd}>
                    <button className={Styles.btnadd} onClick={()=>addItems(Data)}>
                        <GoDiffAdded/></button>
                </div>
                {Showviw ?
    
                <div className={Styles.popViwesActive} >
    
                    <div className={Styles.popCard}>
                       <button onClick={handleClose}> <ImCross/></button>
                    
                    <div className={Styles.popCardimg}>
                    <img src={img} alt="ipone" />
                    </div>
    
                    <div className={Styles.popcardinfo}>
                        <div className={Styles.popcardinfoname}>
                           <span className={Styles.popcardName}>{name}</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus, ad atque totam blanditiis ut similique facilis magnam possimus animi voluptatem odio! Laudantium, quos nesciunt. Enim ea officiis explicabo aut?</p>
                        <span className={Styles.popCardprice}>$ {oldPrice} Kz</span>
                        <div className={Styles.popCardBTN}>
    
                            <div className={Styles.popCarddet}>
                                <Link className={Styles.popcardDetBtn}>Ver mais detalhes</Link>
                            </div>
                            <div className={Styles.popCardcom}>
                                <Link className={Styles.popcardCBtn} onClick={()=>addItems(Data)}>Compra ja</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    
                : ''}
            
            </div>

       
    )
   
    
}