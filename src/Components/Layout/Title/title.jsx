import Styles from "./styles.module.scss"
export function Title({text, subtext, classTitle, datatext}){
    return(
        <h1 data-text ={datatext}className ={Styles[classTitle]}>
            {text} 
            <span>{subtext}</span>
            </h1>
    )
}