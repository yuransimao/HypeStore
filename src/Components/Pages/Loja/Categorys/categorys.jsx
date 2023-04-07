import { NavLink } from "react-router-dom"
import Styles from "./styles.module.scss"
export function Categorys(){
    return(
        <div className={Styles.Categorias}>
        <h3>Categorias</h3>
        <ul className={Styles.Categoria_Lista}>
            <li><NavLink>Produtos de alta tecnologia</NavLink></li>
            <li>
            <NavLink>smartphones</NavLink>
            <ul>
                <li><NavLink>Iphone</NavLink></li>
                <li><NavLink>acessórios para smartphones</NavLink></li>
                <li><NavLink>Smartphones 5G</NavLink></li>
                <li><NavLink>Smartphones com chip duplo</NavLink></li>
                <li><NavLink>Smartphones Android</NavLink></li>
                <li><NavLink>Bons negócios</NavLink></li>
                <li><NavLink>Smartphones dobráveis</NavLink></li>
                <li><NavLink>iPhones com baterias novas</NavLink></li>
                <li><NavLink>Smartphones antigos</NavLink></li>
            </ul>
            <li><button>Ver mais</button></li>
            </li>
        </ul>
        </div>
    
    )
}