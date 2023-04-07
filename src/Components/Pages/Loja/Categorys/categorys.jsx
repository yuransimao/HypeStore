import { NavLink } from "react-router-dom"
import Styles from "./styles.module.scss"
import {useState} from "react"
export function Categorys(){
    const [visivel, setVisivel] = useState(false)
    return(
        <div className={Styles.Categorias}>
        <h2>Categorias</h2>
        <ul className={Styles.Categoria_Lista}>
            <li><NavLink>Produtos de alta tecnologia</NavLink></li>
            <li className={Styles.subItem}>
            <NavLink className={({isActive}) => isActive ? `${Styles.Active}` : ""}>smartphones</NavLink>
            <ul className={Styles.subItem_category}>
                <li><NavLink className={Styles.items}>Iphone</NavLink></li>
                <li><NavLink className={Styles.items}>acessórios para smartphones</NavLink></li>
                <li><NavLink className={Styles.items}>Smartphones 5G</NavLink></li>
                <li><NavLink className={Styles.items}>Smartphones com chip duplo</NavLink></li>
                {visivel === true ?(
                    <>
                    <li><NavLink className={Styles.items}>Smartphones Android</NavLink></li>
                    <li><NavLink className={Styles.items}>Bons negócios</NavLink></li>
                    <li><NavLink className={Styles.items}>Smartphones dobráveis</NavLink></li>
                    <li><NavLink className={Styles.items}>iPhones com baterias novas</NavLink></li>
                    <li><NavLink className={Styles.items}>Smartphones antigos</NavLink></li>
                    </> ): ""
                }
                <li><button onClick={() => setVisivel(!visivel)}>{visivel ? "Ver menos" : "Ver mais"}</button></li>
            </ul>
            
            </li>
        </ul>
        </div>
    
    )
}