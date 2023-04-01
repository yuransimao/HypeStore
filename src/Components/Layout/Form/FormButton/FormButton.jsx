import Styles from"./styles.module.scss"

export function FormButton({text}){
    return(
        <button type='submit' className={Styles.formButton}>{text}</button>
    )
}