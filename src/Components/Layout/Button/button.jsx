import {Link} from"react-router-dom"
import Styles from"./Style.module.scss"
export function LinkButton ({to, txts}){
    return(
        
    <Link  className={Styles.Btao} to={to}>
        {txts}
    </Link>

    )
} 