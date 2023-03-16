import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {BiUserCheck} from "react-icons/bi"
import {TbUser} from "react-icons/tb"
import { useState, useEffect } from "react"

import store from "../../Img/store.png"




import Styles from"./navbar.module.scss"



export function Navbar({setcart, car,carItem}){

    const [menu, setMenu] = useState(false)
   
    const [Search, setSearch] = useState(false)
    const [Navbar, setNavbar] = useState(false)

   
    useEffect(()=>{

        const changeBackground=() =>{
        
            if (window.scrollY >= 550) {
              setNavbar(true)
           }
           else{ setNavbar(false)}
           }
        window.addEventListener('scroll', changeBackground)

        

           
    },[])
     
   
    return(
        <div className={Navbar ? `${Styles.activeHeader}` : `${Styles.header}`} >

         <div className={Styles.wrapper}>

        <div className={Styles.logo}><Link to="/" > <img width='50' src={store} alt="logo" /></Link></div>

        <ul className={menu ?`${Styles.menulink}` : `${Styles.navlink}`} onClick= {()=> setMenu(true)}  >
       
        <li className={Styles.item}><Link to="/">Home</Link></li>
        <li className={Styles.item}>Categoria</li>

        <li className={Styles.item}> <Link to="/Loja">Loja</Link></li>
        <li className={Styles.item}><Link to="/Aboult">About</Link></li>
        <li className={Styles.item}><Link to="/Contact">Contact</Link></li>
        <li className={Styles.item}><Link to="/Help">Help</Link></li>
        </ul>

        <div className={Styles.search}>
            <form>
                <input type="search" placeholder="search here.."/>
                <button><BiSearch/></button>
            </form>
            
       </div>

        <div className={Styles.btnIcon}>
            
            <div>
                <button  className={Styles.BtnCar} onClick={()=> setcart(!car)}>
                    {car ? <AiOutlineShoppingCart/> : <AiOutlineShoppingCart/> }
                 </button>

            </div>
            
             <div className={Styles.User}>
                
            <button className={Styles.Userbutton}> <TbUser/> </button>

             <div className={Styles.UserSessao}>
             {/*
            
                <Link to='/SIGNUP'>Criar conta</Link>
                <Link to='/SIGNIN'>Iniciar Sessao</Link>
                    
                
            */}
             </div>
             
            </div>

            <div>
                <button className={Styles.menuIcon} onClick= {() => setMenu(!menu)}>
                {menu ? <ImCross/> : <FaBars/>}
                </button>
            </div>
                 <div className={Styles.CarshopCont}><span>{(carItem || []).length ===0 ?"0" : (carItem || []).length}</span></div>
        </div>
       </div>
    
        </div>
    )
}