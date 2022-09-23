import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {TbUser} from "react-icons/tb"
import { useState, useEffect } from "react"
import store from "../../Img/store.png"



import Styles from"./navbar.module.scss"


export function Navbar(){

    const [menu, setMenu] = useState(false)
    const [car, setcart] = useState(false)
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

        <div className={Styles.logo}><Link to="/"> <img  src={store} alt="logo" /></Link></div>

        <ul className={menu ?`${Styles.menulink}` : `${Styles.navlink}`} onClick= {()=> setMenu(true)}  >
       
        <Link to="/"><li className={Styles.item}>Home</li></Link>

        <Link to="/Loja"><li className={Styles.item}>Loja</li></Link>
        <Link to="/Aboult"><li className={Styles.item}>About</li></Link>
        <Link to="/Contact"><li className={Styles.item}>Contact</li></Link>
        <Link to="/Help"><li className={Styles.item}>Help</li></Link>
        </ul>

        <div className={car ? `${Styles.Carshop} ` : `${Styles.cart}`} onClick={() => setcart(true)}> 
            {car ? (
                <p>finalizar</p>
            ) : ""}
        </div>

        <div className={Styles.btnIcon}>
            <div>
                <button onClick={() => setSearch(!Search)}>
                    {Search ?  <ImCross/> :<BiSearch/>}
                </button>
            </div>
            <div>
                <button  className={Styles.BtnCar} onClick={()=> setcart(!car)}>
                    {car ? <AiOutlineShoppingCart/> : <AiOutlineShoppingCart/> }
                 </button>
            </div>
            
             <div><button className={Styles.User}> <TbUser/> </button></div>

            <div>
                <button className={Styles.menuIcon} onClick= {() => setMenu(!menu)}>
                {menu ? <ImCross/> : <FaBars/>}
                </button>
            </div>
        </div>
       </div>
       <section className={Search ? `${Styles.activeSearch}` : `${Styles.search}`} onClick={() => setSearch(true)}>
            <form>
                <input type="search" placeholder="search here.."/>
                <div><BiSearch/></div>
            </form>
            <label htmlfor={Styles.input}> </label>
       </section>
    
        </div>
    )
}