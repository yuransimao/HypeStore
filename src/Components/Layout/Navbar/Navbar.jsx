import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { AiOutlineShoppingCart, AiFillHome, AiFillContacts } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import { useState, useEffect } from "react"
import {NavLinks} from "./NavLink/Navlink"


import store from "../../Img/store.png"




import Styles from "./navbar.module.scss"



export function Navbar({ setcart, car,menu, setMenu, setUsermenu,usermenu }) {



    const [Search, setSearch] = useState(false)
    const [Navbar, setNavbar] = useState(false)


    useEffect(() => {

        const changeBackground = () => {

            if (window.scrollY >= 550) {
                setNavbar(true)
                setcart(false)
                setMenu(false)
                setUsermenu(false)
            }
            else { setNavbar(false) }
        }
        window.addEventListener('scroll', changeBackground)




    }, [])

    const cart = () => {
        setcart(!car)
        setMenu(false)
        setUsermenu(false)

    }
    const Menu = () => {
        setcart(false)
        setUsermenu(false)
        setMenu(!menu)

    }
    const UserMenu = () => {
        setcart(false)
        setMenu(false)
        setUsermenu(!usermenu)

    }

    const activeLink = ({isActive}) => (isActive ? `${Styles['Active']}`: '')

    return (
        <div className={Styles.header} >



            <div className={Styles.items}>
                <div className={Styles.logo}><Link to="/" > <img src={store} alt="logo" /></Link></div>

                <div className={Styles.items_link}>
                    <ul>
                        <li><NavLink className={activeLink} to='/About'>About us</NavLink></li>
                        <li><NavLink className={activeLink} to='/Help'> Help</NavLink></li>
                    </ul>
                </div>
                <div className={Styles.Search}>
                    <form >
                        <input type="search" placeholder="Try Iphone, Macbook" />
                        <button><BiSearch /></button>
                    </form>

                </div>
                <div className={Styles.Items_btn}>
                    <button className={Styles.Btn} onClick={cart}>
                        <AiOutlineShoppingCart />
                    </button>
                    <button className={Styles.Btn} onClick={UserMenu} >
                        <FaUserAlt />
                    </button>
                
                </div>

            </div>

            <div className={Styles.items1}>

                <button onClick={Menu}>
                    {menu ? <ImCross /> : <FaBars />} <span>All items</span>
                </button>
                <NavLinks Class='Nav_Link'/>
            </div>
        </div>
    )
}