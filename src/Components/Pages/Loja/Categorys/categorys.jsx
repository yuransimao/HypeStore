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
                <li className={Styles.items}><NavLink>Iphone</NavLink></li>
                <li className={Styles.items}><NavLink>acessórios para smartphones</NavLink></li>
                <li className={Styles.items}><NavLink>Smartphones 5G</NavLink></li>
                <li className={Styles.items}><NavLink>Smartphones com chip duplo</NavLink></li>
                {visivel === true ?(
                    <>
                    <li className={Styles.items}><NavLink>Smartphones Android</NavLink></li>
                    <li className={Styles.items}><NavLink>Bons negócios</NavLink></li>
                    <li className={Styles.items}><NavLink>Smartphones dobráveis</NavLink></li>
                    <li className={Styles.items}><NavLink>iPhones com baterias novas</NavLink></li>
                    <li className={Styles.items}><NavLink>Smartphones antigos</NavLink></li>
                    </> ): ""
                }
                <li><button onClick={() => setVisivel(!visivel)}>{visivel ? "Ver menos" : "Ver mais"}</button></li>
            </ul>
            
            </li>
        </ul>
        </div>
    
    )
}