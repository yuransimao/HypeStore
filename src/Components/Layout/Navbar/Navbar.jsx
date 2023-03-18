import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"
import {AiOutlineShoppingCart,AiFillHome,AiFillContacts} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {BiUserCheck,BiCategory, BiStoreAlt, BiHelpCircle} from "react-icons/bi"
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

         <div className={ Styles.wrapper}>
        
        <div className={Styles.logo}><Link to="/" > <img  src={store} alt="logo" /></Link></div>

        <ul className={menu ?`${Styles.menulink}` : `${Styles.navlink}`} >
       
        <li className={Styles.item}><Link to="/">{menu ? <AiFillHome/> :'Home'}</Link></li>
        <li className={Styles.item}>{menu ? <BiCategory/> : 'Categoria'}</li>

        <li className={Styles.item}> <Link to="/Loja">{menu ? <BiStoreAlt/> : "Loja"}</Link></li>
        <li className={Styles.item}><Link to="/Aboult">About</Link></li>
        <li className={Styles.item}><Link to="/Contact">{menu ? <AiFillContacts/> : 'Contact'}</Link></li>
        <li className={Styles.item}><Link to="/Help">{menu ? <BiHelpCircle/> : "Help"}</Link></li>
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
                    <AiOutlineShoppingCart/> 
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

            
                
        </div>
        <>
                <button className={Styles.menuIcon} onClick= {() => setMenu(!menu)}>
                {menu ? <ImCross/> : <FaBars/>}
                </button>
            </>
       </div>
       
    
        </div>
    )
}