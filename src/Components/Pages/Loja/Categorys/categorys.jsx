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
            <NavLink className={(isActive) => console.log(isActive)}>smartphones</NavLink>
            <ul className={Styles.subItem_category}>
                <li><NavLink>Iphone</NavLink></li>
                <li><NavLink>acessórios para smartphones</NavLink></li>
                <li><NavLink>Smartphones 5G</NavLink></li>
                <li><NavLink>Smartphones com chip duplo</NavLink></li>
                {visivel === true ?(
                    <>
                    <li><NavLink>Smartphones Android</NavLink></li>
                    <li><NavLink>Bons negócios</NavLink></li>
                    <li><NavLink>Smartphones dobráveis</NavLink></li>
                    <li><NavLink>iPhones com baterias novas</NavLink></li>
                    <li><NavLink>Smartphones antigos</NavLink></li>
                    </> ): ""
                }
                <li><button onClick={() => setVisivel(!visivel)}>{visivel ? "Ver menos" : "Ver mais"}</button></li>
            </ul>
            
            </li>
        </ul>
        </div>
    
    )
}