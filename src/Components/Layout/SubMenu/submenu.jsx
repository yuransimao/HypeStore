import {NavLink} from "../Navbar/NavLink/Navlink"
import Styles from "./Styles.module.scss"
export function SubMenu(){
    return(
        <div className={Styles.Submenu}>
            <div className={Styles.Submenu_items}>
                <nav>
                <NavLink Class='Submenu_Link'/>
                </nav>
            </div>
        </div>
    )
}