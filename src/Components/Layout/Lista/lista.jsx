import {Link} from "react-router-dom"
import Styles from "./styles.module.scss"
export function Lista (props){
    return(
        <ul className={Styles[props.CustomClass]}>
            <li className={Styles.active}>
            <Link to={props.to}><h3>{props.text}</h3></Link>
            <ul>
            <li><Link to={props.to1}>{props.text1}</Link></li>
            <li><Link to={props.to2}>{props.text2}</Link></li>
            <li><Link to={props.to3}>{props.text3}</Link></li>
            <li><Link to={props.to4}>{props.text4}</Link></li>
            <li><Link to={props.to5}>{props.ext5}</Link></li>
            <li><Link to={props.to6}>{props.text6}</Link></li>
            <li><Link to={props.to7}>{props.text7}</Link></li>
            <li><Link to={props.to8}>{props.text8}</Link></li>
            </ul>
            </li>
            
        </ul>    
        )
}