import Styles from "./styles.module.scss"
export function Title({text, subtext, classTitle}){
    return(
        <h1 className ={Styles[classTitle]}>{text} <span>{subtext}</span></h1>
    )
}