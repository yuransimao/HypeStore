import Styles from"./styles.module.scss"

export function FormButton({text}){
    return(
        <button className={Styles.formButton}>{text}</button>
    )
}