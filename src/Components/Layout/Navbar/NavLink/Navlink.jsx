import { NavLink } from "react-router-dom"
import Styles from "./styles.module.scss"

export function NavLinks(props){

    const ActiveLink = ({isActive}) => ( isActive ? `${Styles['ActiveL']}`: '')
    return(
        <div className={Styles[props.Class]}>
                    <ul onClick={() => props.setMenu(false)}>
                        <li><NavLink className={Styles['active']}>Student Disconte</NavLink></li>
                        <li><NavLink className={Styles['active1']}>Good deals</NavLink></li>
                        <li><NavLink  to={'/Smartphones'} className={ActiveLink}>Smartphones</NavLink></li>
                        <li><NavLink>AirPods</NavLink></li>
                        <li><NavLink>Tablets</NavLink></li>
                        <li><NavLink>iPhone</NavLink></li>
                        <li><NavLink>iPad</NavLink></li>
                        <li><NavLink>Apple Watch</NavLink></li>
                        <li><NavLink>iMac</NavLink></li>
                        <li><NavLink>iPhone 11</NavLink></li>
                        <li><NavLink>iPhone 12</NavLink></li>
                        <li><NavLink>iPhone 13</NavLink></li>
                        <li><NavLink>iPhone XR</NavLink></li>
                        <li><NavLink>iPhone SE (2020)</NavLink></li>
                        <li><NavLink>Accessories</NavLink></li>
                        <li><NavLink>iPhone X</NavLink></li>
                        <li><NavLink>iPhone 12 Pro Max</NavLink></li>
                        <li><NavLink>iPhone 12 Pro</NavLink></li>
                        <li><NavLink>iPhone 11 Pro Max</NavLink></li>
                        <li><NavLink>Samsung Smartphones</NavLink></li>
                        <li><NavLink>Samsung 5G Phones</NavLink></li>
                        <li><NavLink>MacBook Pro</NavLink></li>
                        <li><NavLink>MacBook Air</NavLink></li>
                        <li><NavLink>Laptops</NavLink></li>
                        <li><NavLink>Computers and Laptops</NavLink></li>
                        <li><NavLink>Cameras and Lenses</NavLink></li>
                        <li><NavLink>Headphones and Earphones</NavLink></li>
                        <li><NavLink>iPad Air</NavLink></li>
                        <li><NavLink>iPad Mini</NavLink></li>
                        <li><NavLink>iPad Pro</NavLink></li>
                        <li><NavLink>Gift guide</NavLink></li>
                        <li><NavLink>Electro Domestico</NavLink></li>
                    </ul>
                </div>
    )
}