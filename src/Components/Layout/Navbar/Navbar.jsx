import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { AiOutlineShoppingCart, AiFillHome, AiFillContacts } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import { useState, useEffect } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



import store from "../../Img/store.png"




import Styles from "./navbar.module.scss"



export function Navbar({ setcart, car, carItem, menu, setMenu }) {



    const [Search, setSearch] = useState(false)
    const [Navbar, setNavbar] = useState(false)


    useEffect(() => {

        const changeBackground = () => {

            if (window.scrollY >= 550) {
                setNavbar(true)
            }
            else { setNavbar(false) }
        }
        window.addEventListener('scroll', changeBackground)




    }, [])

    const cart = () => {
        setcart(!car)
        setMenu(false)

    }
    const Menu = () => {
        setcart(false)
        setMenu(!menu)

    }


    return (
        <div className={Styles.header} >



            <div className={Styles.items}>
                <div className={Styles.logo}><Link to="/" > <img src={store} alt="logo" /></Link></div>

                <div className={Styles.items_link}>
                    <ul>
                        <li><Link to='/About'>About us</Link></li>
                        <li><Link to='/Help'> Help</Link></li>
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
                    <button className={Styles.Btn} >
                        <FaUserAlt />
                    </button>
                </div>

            </div>

            <div className={Styles.items1}>

                <button onClick={Menu}>
                    {menu ? <ImCross /> : <FaBars />} <span>All items</span>
                </button>
                <div className={Styles.Nav_Link}>
                    <ul>
                        <li><Link>Student Disconte</Link></li>
                        <li><Link>Good deals</Link></li>
                        <li><Link>Smartphones</Link></li>
                        <li><Link>AirPods</Link></li>
                        <li><Link>Tablets</Link></li>
                        <li><Link>iPhone</Link></li>
                        <li><Link>iPad</Link></li>
                        <li><Link>Apple Watch</Link></li>
                        <li><Link>iMac</Link></li>
                        <li><Link>iPhone 11</Link></li>
                        <li><Link>iPhone 12</Link></li>
                        <li><Link>iPhone 13</Link></li>
                        <li><Link>iPhone XR</Link></li>
                        <li><Link>iPhone SE (2020)</Link></li>
                        <li><Link>Accessories</Link></li>
                        <li><Link>iPhone X</Link></li>
                        <li><Link>iPhone 12 Pro Max</Link></li>
                        <li><Link>iPhone 12 Pro</Link></li>
                        <li><Link>iPhone 11 Pro Max</Link></li>
                        <li><Link>Samsung Smartphones</Link></li>
                        <li><Link>Samsung 5G Phones</Link></li>
                        <li><Link>MacBook Pro</Link></li>
                        <li><Link>MacBook Air</Link></li>
                        <li><Link>Laptops</Link></li>
                        <li><Link>Computers and Laptops</Link></li>
                        <li><Link>Cameras and Lenses</Link></li>
                        <li><Link>Headphones and Earphones</Link></li>
                        <li><Link>iPad Air</Link></li>
                        <li><Link>iPad Mini</Link></li>
                        <li><Link>iPad Pro</Link></li>
                        <li><Link>Gift guide</Link></li>
                        <li><Link>Electro Domestico</Link></li>





                    </ul>
                </div>
            </div>
        </div>
    )
}