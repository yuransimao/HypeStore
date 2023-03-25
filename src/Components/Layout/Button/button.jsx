import {Link} from"react-router-dom"
import Styles from"./Style.module.scss"
export function LinkButton ({ClassBtn,to, txt}){
    return(
        
    <Link  className={Styles[ClassBtn]} to={to}>
        {txt}
    </Link>

    )
} 