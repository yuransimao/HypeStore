import {Link} from"react-router-dom"
import Styles from"./Style.module.scss"
export function LinkButton ({to, txt}){
    return(
        
    <Link  className={Styles.Botao} to={to}>
        {txt}
    </Link>

    )
} 