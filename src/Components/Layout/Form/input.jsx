import Styles from "./styles.module.scss"


export function Input({text, placeholder,icon}){
    return(
            <div className={Styles.Control}>
                <label className={Styles.LabelInput}>
                    
                    <div className={Styles.inputIcon}>{icon}</div>
                    <input type={text} placeholder={placeholder} />
                </label>
               
            </div>
       
    )
}