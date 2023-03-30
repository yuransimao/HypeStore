import {NavLinks} from "../Navbar/NavLink/Navlink"
import Styles from "./Styles.module.scss"
export function SubMenu({setMenu}){
    return(
        <div className={Styles.Submenu} onClick= {() => setMenu(false) }>
            <div className={Styles.Submenu_items}>
                <nav>
                <NavLinks setMenu={setMenu} Class='Submenu_Link'/>
                </nav>
            </div>
        </div>
    )
}