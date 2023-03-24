import { Link } from "react-router-dom"
import Styles from "./styles.module.scss"

export function NavLink(props){
    return(
        <div className={Styles[props.Class]}>
                    <ul>
                        <li><Link className={Styles['active']}>Student Disconte</Link></li>
                        <li><Link className={Styles['active1']}>Good deals</Link></li>
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
    )
}